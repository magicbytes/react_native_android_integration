import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

import BagCheck from "@assets/icons/partner/bag-check.svg"
import BagCheckCb from "@assets/icons/partner/bag-check-cb.svg"
import BagCheckTicket from "@assets/icons/partner/bag-check-ticket.svg"
import Bank from "@assets/icons/partner/bank.svg"
import Camera from "@assets/icons/partner/camera.svg"
import Check from "@assets/icons/partner/check.svg"
import Discount from "@assets/icons/partner/discount.svg"
import Ebuycard from "@assets/icons/partner/ebuycard.svg"
import GiftCard from "@assets/icons/partner/gift-card.svg"
import PurseEuro from "@assets/icons/partner/purse-euro.svg"
import Note from "@assets/icons/partner/note.svg"

import { carouselCards, CardData } from "@components/TutorialCarousel/data"

const ICONS = {
    BagCheck,
    BagCheckCb,
    BagCheckTicket,
    Bank,
    Camera,
    Check,
    Discount,
    Ebuycard,
    GiftCard,
    PurseEuro,
    Note
}

interface TutorialCarouselProps {
    carouselType: keyof typeof carouselCards
    title?: string
    titleColor?: string
}

const Card = ({ title, subtitle, iconName, mainColor }: CardData & { mainColor: string }): JSX.Element => {
    const IconComponent = ICONS[iconName]

    return (
        <View style={styles.card}>
            <View style={[styles.circle, { backgroundColor: mainColor }]}>
                {IconComponent && <IconComponent fill={mainColor} />}
            </View>
            <Text style={[styles.cardTitle, { color: mainColor }]}>{title.toUpperCase()}</Text>
            <Text style={styles.cardSubtitle}>{subtitle}</Text>
        </View>
    )
}

/**
 * `TutorialCarousel` affiche un carrousel de cartes façon CCM.
 * @param {keyof typeof carouselCards} props.carouselType - Le type de carrousel à afficher.
 *        Les options possibles incluent "online", "ebon", "ebuycard", "offline", "alo", et "coupon".
 * @param {string} [props.title] - Le titre affiché au-dessus du carrousel. Facultatif.
 * @param {string} [props.titleColor] - La couleur du texte du titre. Si non spécifiée,
 *        la couleur principale associée à `carouselType` sera utilisée. Facultatif.
 */
const TutorialCarousel = ({ carouselType, title, titleColor }: TutorialCarouselProps): JSX.Element => {
    const { mainColor, cards } = carouselCards[carouselType]
    const titleStyle = { ...styles.title, color: titleColor || mainColor }

    const renderItem = ({ item }) => <Card {...item} mainColor={mainColor} />

    return (
        <View style={styles.container}>
            {title && <Text style={titleStyle}>{title}</Text>}
            <FlatList data={cards} renderItem={renderItem} keyExtractor={item => item.title} horizontal showsHorizontalScrollIndicator={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 21.79,
        textAlign: "center",
        marginBottom: 20,
        fontFamily: "OpenSans-Bold"
    },
    card: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        overflow: "hidden",
        paddingHorizontal: 14,
        paddingVertical: 24,
        backgroundColor: "white",
        marginHorizontal: 10,
        width: 220,
        height: 185,
        flexShrink: 0,
        alignSelf: "stretch"
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 24.51,
        textAlign: "center",
        marginBottom: 10,
        fontFamily: "OpenSans-Bold"
    },
    cardSubtitle: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 16.34,
        textAlign: "center",
        color: "gray",
        fontFamily: "OpenSans-Regular"
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    }
})

export default TutorialCarousel
