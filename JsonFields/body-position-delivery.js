const bodyPositions = (deliveryPrice) => {
    switch (+deliveryPrice) {
        case 800:
            return (
                {
                    "quantity": 1.0,
                    "price": 80000.0,
                    "discount": 0.0,
                    "vat": 0,
                    "assortment": {
                        "meta": {
                            "href": "https://online.moysklad.ru/api/remap/1.1/entity/product/374c759f-97a3-11ea-0a80-010d00061996",
                            "metadataHref": "https://online.moysklad.ru/api/remap/1.1/entity/product/metadata",
                            "type": "product",
                            "mediaType": "application/json",
                            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=374c69f7-97a3-11ea-0a80-010d00061994"
                        }
                    }
                });
        case 350:
            return (
                {
                    "quantity": 1.0,
                    "price": 35000.0,
                    "discount": 0.0,
                    "vat": 0,
                    "assortment": {
                        "meta": {
                            "href": "https://online.moysklad.ru/api/remap/1.1/entity/product/9f3df634-9d7c-11ea-0a80-06e20014b615",
                            "metadataHref": "https://online.moysklad.ru/api/remap/1.1/entity/product/metadata",
                            "type": "product",
                            "mediaType": "application/json",
                            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=9f3dec15-9d7c-11ea-0a80-06e20014b613"
                        }
                    }
                }
            );
        case 1400:
            return (
                {
                    "quantity": 1.0,
                    "price": 140000.0,
                    "discount": 0.0,
                    "vat": 0,
                    "assortment": {
                        "meta": {
                            "href": "https://online.moysklad.ru/api/remap/1.1/entity/product/0b7ee99b-a01f-11ea-0a80-000400179ce4",
                            "metadataHref": "https://online.moysklad.ru/api/remap/1.1/entity/product/metadata",
                            "type": "product",
                            "mediaType": "application/json",
                            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=0b7ee216-a01f-11ea-0a80-000400179ce2"
                        }
                    }
                }
            )
        default:return (
            {
                "quantity": 1.0,
                "price": +deliveryPrice,
                "discount": 0.0,
                "vat": 0,
                "assortment": {
                    "meta": {
                        "href": "https://online.moysklad.ru/api/remap/1.1/entity/product/0b7ee99b-a01f-11ea-0a80-000400179ce4",
                        "metadataHref": "https://online.moysklad.ru/api/remap/1.1/entity/product/metadata",
                        "type": "product",
                        "mediaType": "application/json",
                        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=0b7ee216-a01f-11ea-0a80-000400179ce2"
                    }
                }
            }
        )
    }
}
module.exports= bodyPositions
