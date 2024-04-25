import { colors } from "@styles/theme"

export interface CategoryData {
    mainColor: string
    cards: CardData[]
}

export interface CardData {
    key: string
    title: string 
    subtitle: string
    iconName: string
}

export const carouselCards: Record<string, CategoryData> = {
    online: {
        mainColor: "#077BC2",
        cards: [
            {
                key: "Card1",
                title: "online title",
                subtitle: "test",
                iconName: "BagCheck"
            },
            {
                key: "Card2",
                title: "online title 2",
                subtitle: "test 2",
                iconName: "Discount"
            },
            {
                key: "Card3",
                title: "online title 3",
                subtitle: "test 3",
                iconName: "PurseEuro"
            }
        ]
    },
    ebon: {
        mainColor: "#7004DC",
        cards: [
            {
                key: "Card1",
                title: "ebon title",
                subtitle: "test",
                iconName: "GiftCard"
            },
            {
                key: "Card2",
                title: "ebon title 2",
                subtitle: "test 2",
                iconName: "Discount"
            },
            {
                key: "Card3",
                title: "ebon title 3",
                subtitle: "test 3",
                iconName: "PurseEuro"
            }
        ]
    },
    offline: {
        mainColor: "#28B5DE",
        cards: [
            {
                key: "Card1",
                title: "offline title",
                subtitle: "test",
                iconName: "BagCheckTicket"
            },
            {
                key: "Card2",
                title: "offline title 2",
                subtitle: "test 2",
                iconName: "Discount"
            },
            {
                key: "Card3",
                title: "offline title 3",
                subtitle: "test 3",
                iconName: "PurseEuro"
            }
        ]
    },
    alo: {
        mainColor: "#38C286",
        cards: [
            {
                key: "Card1",
                title: "alo title",
                subtitle: "test",
                iconName: "Bank"
            },
            {
                key: "Card2",
                title: "alo title 2",
                subtitle: "test 2",
                iconName: "BagCheckCb"
            },
            {
                key: "Card3",
                title: "alo title 2",
                subtitle: "test 2",
                iconName: "PurseEuro"
            }
        ]
    }
}
