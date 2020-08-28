const fieldsFromTildaValidator = (req) => {

    const name = req.body.name || req.body.Name                         // Customer Name
    const phone = req.body.phone || req.body.Phone                      // Customer Phone
    const date = req.body.date                                          // delivery date
    const address = req.body.adress || 'без адреса'                     // Delivery address
    let payment = req.body?.payment
    let store = req.body?.store

    if (typeof payment === 'string') {
        payment = JSON.parse(req.body?.payment)
    }

    const promoCode = payment?.promocode || ''
    const discountValue = payment?.discountvalue || ''
    let amount = payment?.amount || ''
    const subtotal = payment?.subtotal || ''
    const country = payment?.delivery.includes('СПб') ? 'Питер' : 'Москва'
    const delivery = payment?.delivery || ''
    const paymentSystem = req.body.paymentsystem && payment.sys || ''

    const regDeliveryPrice = delivery && delivery.match(/w*\.=([0-9]*.[0.9]*)/)        // shipping price
    const deliveryPrice = regDeliveryPrice ? regDeliveryPrice[1] : 0

    if (deliveryPrice && amount) {
        amount = (+amount) - (+deliveryPrice)
    }
    return ({
        store,
        name,
        phone,
        date,
        address,
        promoCode,
        discountValue,
        amount,
        subtotal,
        country,
        delivery,
        paymentSystem,
        deliveryPrice
    })
}

module.exports = fieldsFromTildaValidator

