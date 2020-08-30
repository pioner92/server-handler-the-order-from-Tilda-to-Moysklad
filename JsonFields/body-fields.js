const bodyFields = (date, address, paymentSystem, delivery, promoCode, country) => (
    {
        state: {
            meta: {
                href: 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder/metadata/states/4a0c48c0-9563-11ea-0a80-047800001e41',
                metadataHref: 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder/metadata',
                type: 'state',
                mediaType: 'application/json',
            },
        },
        attributes: [
            {
                meta: {
                    href: 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder/metadata/attributes/2b7bfe43-b660-11ea-0a80-00c1000bca74',
                    type: 'attributemetadata',
                    mediaType: 'application/json',
                },
                id: '2b7bfe43-b660-11ea-0a80-00c1000bca74',
                name: 'Продавец',
                type: 'customentity',
                value: {
                    meta: {
                        href: 'https://online.moysklad.ru/api/remap/1.1/entity/customentity/19d32bc4-b660-11ea-0a80-03e600008d30/463bf556-b660-11ea-0a80-0219001c234a',
                        metadataHref: 'https://online.moysklad.ru/api/remap/1.1/entity/companysettings/metadata/customEntities/19d32bc4-b660-11ea-0a80-03e600008d30',
                        type: 'customentity',
                        mediaType: 'application/json',
                        uuidHref: 'https://online.moysklad.ru/app/#custom_19d32bc4-b660-11ea-0a80-03e600008d30/edit?id=463bf556-b660-11ea-0a80-0219001c234a',
                    },
                    name: 'Продавец по умолчанию',
                },

            },
            {
                name: 'test',
                meta: {
                    href: 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder/metadata/attributes/574fffda-956c-11ea-0a80-047800003581',
                    type: 'attributemetadata',
                    mediaType: 'application/json',
                },
                id: '574fffda-956c-11ea-0a80-047800003581',
                name: 'Дата доставки',
                type: 'time',
                value: `${date} 09:00:00`,
            },
            {
                meta: {
                    href: 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder/metadata/attributes/49adb804-a649-11ea-0a80-01cb0005cce3',
                    type: 'attributemetadata',
                    mediaType: 'application/json',
                },
                id: '49adb804-a649-11ea-0a80-01cb0005cce3',
                name: 'Адрес доставки',
                type: 'string',
                value: address,
            },
            {
                meta: {
                    href: 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder/metadata/attributes/c22cd3d6-956c-11ea-0a80-0478000035d3',
                    type: 'attributemetadata',
                    mediaType: 'application/json',
                },

            },
            {
                meta: {
                    href: 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder/metadata/attributes/c22cd904-956c-11ea-0a80-0478000035d4',
                    type: 'attributemetadata',
                    mediaType: 'application/json',
                },
                id: 'c22cd904-956c-11ea-0a80-0478000035d4',
                name: 'Способ оплаты',
                type: 'customentity',
                value: {
                    // "name": paymentsystem === "cash" ? "Наличка при получении" : "Оплачено на сайте"
                    name: 'По умолчанию',

                },
            },
            {
                meta: {
                    href: 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder/metadata/attributes/6d317a84-956d-11ea-0a80-047800003652',
                    type: 'attributemetadata',
                    mediaType: 'application/json',
                },
                id: '6d317a84-956d-11ea-0a80-047800003652',
                name: 'Доставка СПб/ЛО',
                type: 'customentity',
                value: {
                    name: delivery,
                },
            },

            promoCode ? {
                meta: {
                    href: 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder/metadata/attributes/ac4a6722-a646-11ea-0a80-04bd0005d1e5',
                    type: 'attributemetadata',
                    mediaType: 'application/json',
                },
                customEntityMeta: {
                    href: 'https://online.moysklad.ru/api/remap/1.1/entity/companysettings/metadata/customEntities/1e0833c0-9fef-11ea-0a80-05d900116978',
                    type: 'customentitymetadata',
                    mediaType: 'application/json',
                },
                id: 'ac4a6722-a646-11ea-0a80-04bd0005d1e5',
                name: 'Промокод',
                type: 'customentity',
                required: false,
                value: {
                    name: promoCode,
                },
            } : {
                meta: {
                    href: 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder/metadata/attributes/ac4a6722-a646-11ea-0a80-04bd0005d1e5',
                    type: 'attributemetadata',
                    mediaType: 'application/json',
                },
            },
            {
                meta: {
                    href: 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder/metadata/attributes/c2301d3a-9ff8-11ea-0a80-012d00136f27',
                    type: 'attributemetadata',
                    mediaType: 'application/json',
                },
                id: 'c2301d3a-9ff8-11ea-0a80-012d00136f27',
                name: 'Оплачено',
                type: 'boolean',
                value: false,

            },
            country === 'Питер' ? {
                meta: {
                    href: 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder/metadata/attributes/0b74f616-a03b-11ea-0a80-012e001a4720',
                    type: 'attributemetadata',
                    mediaType: 'application/json',
                },
                id: '0b74f616-a03b-11ea-0a80-012e001a4720',
                name: 'Город',
                type: 'customentity',
                value: {
                    meta: {
                        href: 'https://online.moysklad.ru/api/remap/1.1/entity/customentity/0213df8a-a03b-11ea-0a80-05d8001b2071/20299a5b-a03b-11ea-0a80-0235001b4b98',
                        metadataHref: 'https://online.moysklad.ru/api/remap/1.1/entity/companysettings/metadata/customEntities/0213df8a-a03b-11ea-0a80-05d8001b2071',
                        type: 'customentity',
                        mediaType: 'application/json',
                        uuidHref: 'https://online.moysklad.ru/app/#custom_0213df8a-a03b-11ea-0a80-05d8001b2071/edit?id=20299a5b-a03b-11ea-0a80-0235001b4b98',
                    },
                    name: 'Питер',
                },
            }
                : {
                    meta: {
                        href: 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder/metadata/attributes/0b74f616-a03b-11ea-0a80-012e001a4720',
                        type: 'attributemetadata',
                        mediaType: 'application/json',
                    },
                    id: '0b74f616-a03b-11ea-0a80-012e001a4720',
                    name: 'Город',
                    type: 'customentity',
                    value: {
                        meta: {
                            href: 'https://online.moysklad.ru/api/remap/1.1/entity/customentity/0213df8a-a03b-11ea-0a80-05d8001b2071/2805f169-a03b-11ea-0a80-05d8001b21b1',
                            metadataHref: 'https://online.moysklad.ru/api/remap/1.1/entity/companysettings/metadata/customEntities/0213df8a-a03b-11ea-0a80-05d8001b2071',
                            type: 'customentity',
                            mediaType: 'application/json',
                            uuidHref: 'https://online.moysklad.ru/app/#custom_0213df8a-a03b-11ea-0a80-05d8001b2071/edit?id=2805f169-a03b-11ea-0a80-05d8001b21b1',
                        },
                        name: 'Москва',
                    },
                },
        ],
    }
);
module.exports = bodyFields;
