package com.example.poreactnativev2

import android.app.Activity
import android.app.Application
import android.content.Context
import com.facebook.react.ReactInstanceManager
import com.facebook.react.common.LifecycleState
import com.facebook.react.shell.MainReactPackage

class ReactNativeManager private constructor(context: Context) {

    val reactInstanceManager: ReactInstanceManager

    init {
        reactInstanceManager = ReactInstanceManager.builder()
            .setApplication(context.applicationContext as Application)
            .setCurrentActivity(context as Activity)
            .setBundleAssetName("index.android.bundle")
            .setJSMainModulePath("index")
            .addPackages(listOf(MainReactPackage())) // <- Add "YourPackageName" here if any
            .setInitialLifecycleState(LifecycleState.RESUMED)
            .setUseDeveloperSupport(BuildConfig.DEBUG)
            .build()
    }

    companion object {

        @Volatile
        private var INSTANCE: ReactNativeManager? = null

        fun getInstance(context: Context): ReactNativeManager {
            return INSTANCE ?: synchronized(this) {
                val instance = ReactNativeManager(context)
                INSTANCE = instance
                instance
            }
        }

        fun destroy() {
            INSTANCE?.reactInstanceManager?.onHostDestroy()
            INSTANCE = null
        }
    }
}
