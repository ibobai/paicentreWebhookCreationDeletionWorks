export const mockEvents = [
  {
    id: "evt_1K7dJ02eZvKYlo2C3Fh7L0oP",
    object: "event",
    api_version: "2024-04-10",
    created: 1626374460,
    data: {
      object: {
        id: "pi_1K7dIR2eZvKYlo2C3Fh7L0oM",
        object: "payment_intent",
        amount: 2000,
        status: "succeeded"
      }
    },
    type: "payment_intent.succeeded",
    provider: "stripe"
  },
  {
    id: "WH-3EJ12345T6789012A-4B5C6D7E8F9G0H1I",
    event_version: "1.0",
    create_time: "2024-04-10T12:34:56Z",
    resource_type: "sale",
    event_type: "PAYMENT.SALE.COMPLETED",
    summary: "Payment completed for $20.00 USD",
    resource: {
      id: "9XJ12345V6789012Y",
      state: "completed",
      amount: {
        total: "20.00",
        currency: "USD"
      }
    },
    provider: "paypal"
  },
  // Additional mock events
  {
    id: "evt_2L8eK13eZvKYlo3D4Gi8M1pQ",
    object: "event",
    api_version: "2024-04-10",
    created: 1626374470,
    type: "charge.succeeded",
    provider: "stripe"
  },
  {
    id: "WH-4FK23456U7890123B-5C6D7E8F9G0H1I2",
    event_version: "1.0",
    create_time: "2024-04-10T12:35:56Z",
    event_type: "BILLING.SUBSCRIPTION.CREATED",
    provider: "paypal"
  },
  {
    id: "evt_3M9fL24fZwLZmp4E5Hj9N2qR",
    object: "event",
    created: 1626374480,
    type: "customer.subscription.created",
    provider: "stripe"
  },
  {
    id: "WH-5GL34567V8901234C-6D7E8F9G0H1I2J3",
    create_time: "2024-04-10T12:36:56Z",
    event_type: "CHECKOUT.ORDER.APPROVED",
    provider: "paypal"
  },
  {
    id: "evt_4N0gM35gAxMAnp5F6Ik0O3rS",
    created: 1626374490,
    type: "invoice.payment_succeeded",
    provider: "stripe"
  },
  {
    id: "WH-6HM45678W9012345D-7E8F9G0H1I2J3K4",
    create_time: "2024-04-10T12:37:56Z",
    event_type: "PAYMENT.CAPTURE.COMPLETED",
    provider: "paypal"
  },
  {
    id: "evt_5O1hN46hByNBop6G7Jl1P4sT",
    created: 1626374500,
    type: "payment_intent.created",
    provider: "stripe"
  },
  {
    id: "WH-7IN56789X0123456E-8F9G0H1I2J3K4L5",
    create_time: "2024-04-10T12:38:56Z",
    event_type: "PAYMENT.SALE.PENDING",
    provider: "paypal"
  },
  {
    id: "evt_6P2iO57iCzOCpq7H8Km2Q5tU",
    created: 1626374510,
    type: "charge.failed",
    provider: "stripe"
  },
  {
    id: "WH-8JO67890Y1234567F-9G0H1I2J3K4L5M6",
    create_time: "2024-04-10T12:39:56Z",
    event_type: "PAYMENT.SALE.DENIED",
    provider: "paypal"
  },
  {
    id: "evt_7Q3jP68jDAQDqr8I9Ln3R6uV",
    created: 1626374520,
    type: "customer.created",
    provider: "stripe"
  },
  {
    id: "WH-9KP78901Z2345678G-0H1I2J3K4L5M6N7",
    create_time: "2024-04-10T12:40:56Z",
    event_type: "CUSTOMER.DISPUTE.CREATED",
    provider: "paypal"
  },
  {
    id: "evt_8R4kQ79kEBRErr9J0Mo4S7vW",
    created: 1626374530,
    type: "payment_method.attached",
    provider: "stripe"
  },
  {
    id: "WH-0LQ89012A3456789H-1I2J3K4L5M6N7O8",
    create_time: "2024-04-10T12:41:56Z",
    event_type: "PAYMENT.AUTHORIZATION.CREATED",
    provider: "paypal"
  },
  {
    id: "evt_9S5lR80lFCSFss0K1Np5T8wX",
    created: 1626374540,
    type: "setup_intent.succeeded",
    provider: "stripe"
  },
  {
    id: "WH-1MR90123B4567890I-2J3K4L5M6N7O8P9",
    create_time: "2024-04-10T12:42:56Z",
    event_type: "BILLING.PLAN.CREATED",
    provider: "paypal"
  },
  {
    id: "evt_0T6mS91mGDTGtt1L2Oq6U9xY",
    created: 1626374550,
    type: "payment_intent.payment_failed",
    provider: "stripe"
  },
  {
    id: "WH-2MS01234C5678901J-3K4L5M6N7O8P9Q0",
    create_time: "2024-04-10T12:43:56Z",
    event_type: "PAYMENT.CAPTURE.DENIED",
    provider: "paypal"
  }
];