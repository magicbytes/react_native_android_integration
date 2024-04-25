package com.example.poreactnativev2

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.provider.Settings
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import com.example.poreactnativev2.ui.theme.POReactNativeV2Theme
import com.facebook.react.PackageList
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactPackage
import com.facebook.react.ReactRootView
import com.facebook.react.common.LifecycleState
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler

class ThirdActivity : ComponentActivity(), DefaultHardwareBackBtnHandler {
    private lateinit var reactRootView: ReactRootView
    private lateinit var reactInstanceManager: ReactInstanceManager

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        reactRootView = ReactRootView(this)
        val packages: List<ReactPackage> = PackageList(application).packages
        // Packages that cannot be autolinked yet can be added manually here, for example:
        // packages.add(MyReactNativePackage())
        // Remember to include them in `settings.gradle` and `app/build.gradle` too.
        reactInstanceManager = ReactInstanceManager.builder()
            .setApplication(application)
            .setCurrentActivity(this)
            .setBundleAssetName("index.android.bundle")
            .setJSMainModulePath("index")
            .addPackages(packages)
            .setUseDeveloperSupport(BuildConfig.DEBUG)
            .setInitialLifecycleState(LifecycleState.RESUMED)
            .build()
        // The string here (e.g. "MyReactNativeApp") has to match
        // the string in AppRegistry.registerComponent() in index.js
        reactRootView.startReactApplication(reactInstanceManager, "TestSingComponent", null)

        setContent {
            POReactNativeV2Theme {
                // A surface container using the 'background' color from the theme
                Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background) {

                    val context = LocalContext.current
                    Column {

                        Column(modifier = Modifier.weight(1f)) {
                            AndroidView(factory = { reactRootView }, modifier = Modifier.fillMaxSize())
                        }

                        Card {
                            Column {
                                Text(text = "This is added in compose")
                            }
                        }

                        Button(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(top = 24.dp),
                            onClick = ::finish
                        ) {
                            Text(text = "Close")
                        }
                    }
                }
            }
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
            if (!Settings.canDrawOverlays(this)) {
                // SYSTEM_ALERT_WINDOW permission not granted
            }
        }
        ReactInstanceManager.builder().build()?.onActivityResult(this, requestCode, resultCode, data)
    }

    override fun onPause() {
        super.onPause()
        reactInstanceManager.onHostPause(this)
    }

    override fun onResume() {
        super.onResume()
        reactInstanceManager.onHostResume(this, this)
    }

    override fun onDestroy() {
        super.onDestroy()
        reactInstanceManager.onHostDestroy(this)
        reactRootView.unmountReactApplication()
    }

    override fun invokeDefaultOnBackPressed() {
        super.onBackPressed()
    }

    companion object {
        const val OVERLAY_PERMISSION_REQ_CODE = 1  // Choose any value
    }
}
