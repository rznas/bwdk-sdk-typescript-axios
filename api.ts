/* tslint:disable */
/* eslint-disable */
/**
 * BWDK API
 * <div dir=\"rtl\" style=\"text-align: right;\">  # مستندات فروشندگان در سرویس خرید با دیجی‌کالا  این پلتفرم برای فروشندگان (مرچنت‌ها) جهت یکپارچه‌سازی خدمات پرداخت و تجارت الکترونیکی با سیستم خرید با دیجی‌کالا. شامل مدیریت سفارشات، ارسال، و احراز هویت فروشندگان است.     ```mermaid flowchart TD     START([شروع]) --> INITIAL      INITIAL[\"1️⃣ INITIAL\\nسفارش ایجاد شد\"]     STARTED[\"2️⃣ STARTED\\nمشتری به BWDK هدایت شد\"]     PENDING[\"3️⃣ PENDING\\nمشتری وارد شد و سفارش در انتظار پرداخت\"]     WAITING_FOR_GATEWAY[\"4️⃣ WAITING_FOR_GATEWAY\\nمشتری به درگاه پرداخت هدایت شد\"]     PAID_BY_USER[\"7️⃣ PAID_BY_USER\\nپرداخت موفق\"]     VERIFIED_BY_MERCHANT[\"9️⃣ VERIFIED_BY_MERCHANT\\nتأیید شده توسط فروشنده\"]     SHIPPED[\"🚚 SHIPPED\\nارسال شد\"]     DELIVERED[\"✅ DELIVERED\\nتحویل داده شد\"]      EXPIRED[\"⏰ EXPIRED\\nمنقضی شد\"]     EXPIRATION_TIME_EXCEEDED[\"⏱️ EXPIRATION_TIME_EXCEEDED\\nزمان انقضا گذشت\"]     CANCELLED[\"❌ CANCELLED\\nلغو توسط مشتری\"]     FAILED_TO_PAY[\"💳 FAILED_TO_PAY\\nپرداخت ناموفق\"]     FAILED_TO_VERIFY_BY_MERCHANT[\"🔴 FAILED_TO_VERIFY_BY_MERCHANT\\nتأیید مرچنت ناموفق\"]     FAILED_BY_MERCHANT[\"🔴 FAILED_BY_MERCHANT\\nخطا از سمت مرچنت\"]     CANCELLED_BY_MERCHANT[\"🔴 CANCELLED_BY_MERCHANT\\nلغو توسط مرچنت\"]      R_CUSTOMER_REQUEST[\"1️⃣3️⃣ REQUEST_TO_REFUND\\nدرخواست استرداد توسط مشتری\"]     R_FAILED_VERIFY[\"1️⃣4️⃣ REQUEST_TO_REFUND\\nاسترداد پس از تأیید ناموفق مرچنت\"]     R_FAILED_MERCHANT[\"1️⃣5️⃣ REQUEST_TO_REFUND\\nاسترداد پس از خطای مرچنت\"]     R_CANCELLED_MERCHANT[\"1️⃣6️⃣ REQUEST_TO_REFUND\\nاسترداد پس از لغو مرچنت\"]     REFUND_COMPLETED[\"✅ REFUND_COMPLETED\\nاسترداد تکمیل شد\"]      INITIAL -->|\"مرچنت سفارش ایجاد کرد\"| STARTED     STARTED -->|\"مشتری وارد سیستم شد\"| PENDING     PENDING -->|\"مشتری سفارش را نهایی و ثبت کرد\"| WAITING_FOR_GATEWAY     WAITING_FOR_GATEWAY -->|\"پرداخت با موفقیت انجام شد\"| PAID_BY_USER     PAID_BY_USER -->|\"مرچنت سفارش را تأیید کرد\"| VERIFIED_BY_MERCHANT     VERIFIED_BY_MERCHANT -->|\"مرچنت وضعیت را به ارسال تغییر داد\"| SHIPPED     SHIPPED -->|\"مرچنت تحویل را تأیید کرد\"| DELIVERED      INITIAL -->|\"زمان رزرو به پایان رسید\"| EXPIRED     STARTED -->|\"زمان رزرو به پایان رسید\"| EXPIRED     PENDING -->|\"زمان رزرو به پایان رسید\"| EXPIRED     WAITING_FOR_GATEWAY -->|\"زمان رزرو به پایان رسید\"| EXPIRED      PENDING -->|\"زمان مجاز سفارش سپری شده بود\"| EXPIRATION_TIME_EXCEEDED     WAITING_FOR_GATEWAY -->|\"زمان مجاز سفارش سپری شده بود\"| EXPIRATION_TIME_EXCEEDED      PENDING -->|\"مشتری انصراف داد\"| CANCELLED     WAITING_FOR_GATEWAY -->|\"مشتری انصراف داد\"| CANCELLED      WAITING_FOR_GATEWAY -->|\"پرداخت ناموفق بود\"| FAILED_TO_PAY      PAID_BY_USER -->|\"مرچنت تأیید را رد کرد\"| FAILED_TO_VERIFY_BY_MERCHANT     PAID_BY_USER -->|\"مرچنت اعلام ناتوانی در انجام سفارش کرد\"| FAILED_BY_MERCHANT     PAID_BY_USER -->|\"مرچنت سفارش را لغو کرد\"| CANCELLED_BY_MERCHANT     VERIFIED_BY_MERCHANT -->|\"مرچنت سفارش را لغو کرد\"| CANCELLED_BY_MERCHANT      PAID_BY_USER -->|\"مرچنت درخواست استرداد داد\"| R_CUSTOMER_REQUEST     VERIFIED_BY_MERCHANT -->|\"مرچنت درخواست استرداد داد\"| R_CUSTOMER_REQUEST     FAILED_TO_VERIFY_BY_MERCHANT -->|\"سیستم استرداد را آغاز کرد\"| R_FAILED_VERIFY     FAILED_BY_MERCHANT -->|\"سیستم استرداد را آغاز کرد\"| R_FAILED_MERCHANT     CANCELLED_BY_MERCHANT -->|\"سیستم استرداد را آغاز کرد\"| R_CANCELLED_MERCHANT      R_CUSTOMER_REQUEST -->|\"استرداد توسط دیجی‌پی تأیید شد\"| REFUND_COMPLETED     R_FAILED_VERIFY -->|\"استرداد توسط دیجی‌پی تأیید شد\"| REFUND_COMPLETED     R_FAILED_MERCHANT -->|\"استرداد توسط دیجی‌پی تأیید شد\"| REFUND_COMPLETED     R_CANCELLED_MERCHANT -->|\"استرداد توسط دیجی‌پی تأیید شد\"| REFUND_COMPLETED      style INITIAL fill:#9e9e9e,color:#fff     style STARTED fill:#1565c0,color:#fff     style PENDING fill:#ef6c00,color:#fff     style WAITING_FOR_GATEWAY fill:#6a1b9a,color:#fff     style PAID_BY_USER fill:#2e7d32,color:#fff     style VERIFIED_BY_MERCHANT fill:#1b5e20,color:#fff     style SHIPPED fill:#0277bd,color:#fff     style DELIVERED fill:#1b5e20,color:#fff     style EXPIRED fill:#b71c1c,color:#fff     style EXPIRATION_TIME_EXCEEDED fill:#b71c1c,color:#fff     style CANCELLED fill:#7f0000,color:#fff     style FAILED_TO_PAY fill:#b71c1c,color:#fff     style FAILED_TO_VERIFY_BY_MERCHANT fill:#b71c1c,color:#fff     style FAILED_BY_MERCHANT fill:#b71c1c,color:#fff     style CANCELLED_BY_MERCHANT fill:#7f0000,color:#fff     style R_CUSTOMER_REQUEST fill:#e65100,color:#fff     style R_FAILED_VERIFY fill:#e65100,color:#fff     style R_FAILED_MERCHANT fill:#e65100,color:#fff     style R_CANCELLED_MERCHANT fill:#e65100,color:#fff     style REFUND_COMPLETED fill:#2e7d32,color:#fff ```  ---  <div dir=\"rtl\" style=\"text-align: right;\">  ## توضیح وضعیت‌های سفارش  ### ۱. INITIAL — ایجاد اولیه سفارش  **معنا:** سفارش توسط بک‌اند مرچنت ساخته شده ولی هنوز هیچ کاربری به آن اختصاص داده نشده است.  **چگونه اتفاق می‌افتد:** مرچنت با ارسال درخواست `POST /api/v1/orders/create` و ارائه اطلاعات کالاها، مبلغ و `callback_url`، یک سفارش جدید ایجاد می‌کند. BWDK یک `order_uuid` منحصربه‌فرد و لینک شروع سفارش (`order_start_url`) برمی‌گرداند.  **وابستگی‌ها:** نیازی به کاربر یا پرداخت ندارد. فقط اطلاعات کالا از سمت مرچنت کافی است.  ---  ### ۲. STARTED — آغاز جریان خرید  **معنا:** مشتری روی لینک شروع سفارش کلیک کرده و وارد محیط BWDK شده است، اما هنوز لاگین نکرده.  **چگونه اتفاق می‌افتد:** وقتی مشتری به `order_start_url` هدایت می‌شود، BWDK وضعیت سفارش را از `INITIAL` به `STARTED` تغییر می‌دهد. در این مرحله فرآیند احراز هویت (SSO) آغاز می‌شود.  **وابستگی‌ها:** مشتری باید به لینک شروع هدایت شده باشد.  ---  ### ۳. PENDING — انتظار برای تکمیل سفارش  **معنا:** مشتری با موفقیت وارد سیستم شده و سفارش به حساب او اختصاص یافته. مشتری در حال انتخاب آدرس، روش ارسال، بسته‌بندی یا تخفیف است.  **چگونه اتفاق می‌افتد:** پس از تکمیل ورود به سیستم (SSO)، BWDK سفارش را به کاربر وصل کرده و وضعیت را به `PENDING` تغییر می‌دهد.  **وابستگی‌ها:** ورود موفق کاربر به سیستم (SSO). در این مرحله مشتری می‌تواند آدرس، شیپینگ، پکینگ و تخفیف را انتخاب کند.  ---  ### ۴. WAITING_FOR_GATEWAY — انتظار برای پرداخت  **معنا:** مشتری اطلاعات سفارش را تأیید کرده و به درگاه پرداخت هدایت شده است.  **چگونه اتفاق می‌افتد:** مشتری دکمه «پرداخت» را می‌زند (`POST /api/v1/orders/submit`)، سیستم یک رکورد پرداخت ایجاد می‌کند و کاربر به درگاه Digipay هدایت می‌شود. وضعیت سفارش به `WAITING_FOR_GATEWAY` تغییر می‌کند.  **وابستگی‌ها:** انتخاب آدرس، روش ارسال و بسته‌بندی الزامی است. پرداخت باید ایجاد شده باشد.  ---  ### ۷. PAID_BY_USER — پرداخت موفق  **معنا:** تراکنش پرداخت با موفقیت انجام شده و وجه از حساب مشتری کسر شده است.  **چگونه اتفاق می‌افتد:** درگاه پرداخت نتیجه موفق را به BWDK اطلاع می‌دهد. سیستم پرداخت را تأیید و وضعیت سفارش را به `PAID_BY_USER` تغییر می‌دهد. در این لحظه مشتری به `callback_url` مرچنت هدایت می‌شود.  **وابستگی‌ها:** تأیید موفق تراکنش از سوی درگاه پرداخت (Digipay).  ---  ### ۹. VERIFIED_BY_MERCHANT — تأیید توسط مرچنت  **معنا:** مرچنت سفارش را بررسی کرده و موجودی کالا و صحت اطلاعات را تأیید نموده است. سفارش آماده ارسال است.  **چگونه اتفاق می‌افتد:** مرچنت با ارسال درخواست `POST /api/v1/orders/manager/{uuid}/verify` سفارش را تأیید می‌کند. این مرحله **اجباری** است و باید پس از پرداخت موفق انجام شود.  **وابستگی‌ها:** سفارش باید در وضعیت `PAID_BY_USER` باشد. مرچنت باید موجودی کالا را بررسی کند.  ---  ### ۲۰. SHIPPED — ارسال شد  **معنا:** سفارش از انبار خارج شده و در حال ارسال به مشتری است.  **چگونه اتفاق می‌افتد:** مرچنت پس از ارسال کالا، وضعیت سفارش را از طریق API به `SHIPPED` تغییر می‌دهد.  **وابستگی‌ها:** سفارش باید در وضعیت `VERIFIED_BY_MERCHANT` باشد.  ---  ### ۱۹. DELIVERED — تحویل داده شد  **معنا:** سفارش به دست مشتری رسیده و فرآیند خرید به پایان رسیده است.  **چگونه اتفاق می‌افتد:** مرچنت پس از تحویل موفق، وضعیت را به `DELIVERED` تغییر می‌دهد.  **وابستگی‌ها:** سفارش باید در وضعیت `SHIPPED` باشد.  ---  ### ۵. EXPIRED — منقضی شد  **معنا:** زمان رزرو سفارش به پایان رسیده و سفارش به صورت خودکار لغو شده است.  **چگونه اتفاق می‌افتد:** یک Task دوره‌ای به طور خودکار سفارش‌هایی که `reservation_expired_at` آن‌ها گذشته را پیدا کرده و وضعیتشان را به `EXPIRED` تغییر می‌دهد. این مکانیزم مانع بلوکه شدن موجودی کالا می‌شود.  **وابستگی‌ها:** سفارش باید در یکی از وضعیت‌های `INITIAL`، `STARTED`، `PENDING` یا `WAITING_FOR_GATEWAY` باشد و زمان رزرو آن گذشته باشد.  ---  ### ۱۸. EXPIRATION_TIME_EXCEEDED — زمان انقضا گذشت  **معنا:** در لحظه ثبت نهایی یا پرداخت، مشخص شد که زمان مجاز سفارش تمام شده است.  **چگونه اتفاق می‌افتد:** هنگام ارسال درخواست پرداخت (`submit_order`)، سیستم بررسی می‌کند که `expiration_time` سفارش هنوز معتبر است یا خیر. در صورت گذشتن زمان، وضعیت به `EXPIRATION_TIME_EXCEEDED` تغییر می‌کند.  **وابستگی‌ها:** سفارش در وضعیت `PENDING` یا `WAITING_FOR_GATEWAY` است و فیلد `expiration_time` سپری شده.  ---  ### ۶. CANCELLED — لغو توسط مشتری  **معنا:** مشتری در حین فرآیند خرید (قبل از پرداخت) سفارش را لغو کرده یا از صفحه خارج شده است.  **چگونه اتفاق می‌افتد:** مشتری در صفحه checkout دکمه «انصراف» را می‌زند یا پرداخت ناموفق بوده و سفارش به حالت لغو درمی‌آید.  **وابستگی‌ها:** سفارش باید در وضعیت `PENDING` یا `WAITING_FOR_GATEWAY` باشد. پرداختی انجام نشده است.  ---  ### ۸. FAILED_TO_PAY — پرداخت ناموفق  **معنا:** تراکنش پرداخت انجام نشد یا با خطا مواجه شد.  **چگونه اتفاق می‌افتد:** درگاه پرداخت نتیجه ناموفق برمی‌گرداند یا فرآیند بازگشت وجه در مرحله پرداخت با شکست مواجه می‌شود.  **وابستگی‌ها:** سفارش باید در وضعیت `WAITING_FOR_GATEWAY` بوده باشد.  ---  ### ۱۰. FAILED_TO_VERIFY_BY_MERCHANT — تأیید ناموفق توسط مرچنت  **معنا:** مرچنت سفارش را رد کرده است؛ معمولاً به دلیل ناموجود بودن کالا یا مغایرت اطلاعات.  **چگونه اتفاق می‌افتد:** مرچنت در پاسخ به درخواست verify، خطا برمی‌گرداند یا API آن وضعیت ناموفق تنظیم می‌کند. پس از این وضعیت، فرآیند استرداد وجه آغاز می‌شود.  **وابستگی‌ها:** سفارش باید در وضعیت `PAID_BY_USER` باشد.  ---  ### ۱۱. FAILED_BY_MERCHANT — خطا از سمت مرچنت  **معنا:** مرچنت پس از تأیید اولیه، اعلام می‌کند که قادر به انجام سفارش نیست (مثلاً به دلیل اتمام موجودی).  **چگونه اتفاق می‌افتد:** مرچنت وضعیت را به `FAILED_BY_MERCHANT` تغییر می‌دهد. وجه پرداختی مشتری مسترد خواهد شد.  **وابستگی‌ها:** سفارش باید در وضعیت `PAID_BY_USER` باشد.  ---  ### ۱۲. CANCELLED_BY_MERCHANT — لغو توسط مرچنت  **معنا:** مرچنت پس از پرداخت، سفارش را به هر دلیلی لغو کرده است.  **چگونه اتفاق می‌افتد:** مرچنت درخواست لغو سفارش را ارسال می‌کند. وجه پرداختی مشتری به او بازگردانده می‌شود.  **وابستگی‌ها:** سفارش باید در وضعیت `PAID_BY_USER` یا `VERIFIED_BY_MERCHANT` باشد.  ---  ### ۱۳. REQUEST_TO_REFUND — درخواست استرداد توسط مشتری  **معنا:** مشتری درخواست بازگشت وجه داده و سیستم در حال پردازش استرداد است.  **چگونه اتفاق می‌افتد:** مرچنت از طریق API درخواست استرداد را ثبت می‌کند (`POST /api/v1/orders/manager/{uuid}/refund`). سفارش وارد صف پردازش استرداد می‌شود.  **وابستگی‌ها:** سفارش باید در وضعیت `PAID_BY_USER` یا `VERIFIED_BY_MERCHANT` باشد.  ---  ### ۱۴، ۱۵، ۱۶. سایر وضعیت‌های درخواست استرداد  این وضعیت‌ها بر اساس دلیل استرداد از هم تفکیک می‌شوند:  - **۱۴ — REQUEST_TO_REFUND_TO_MERCHANT_AFTER_FAILED_TO_VERIFY:** استرداد پس از ناموفق بودن تأیید مرچنت؛ وجه به حساب مرچنت بازمی‌گردد. - **۱۵ — REQUEST_TO_REFUND_TO_CUSTOMER_AFTER_FAILED_BY_MERCHANT:** استرداد پس از خطای مرچنت؛ وجه به مشتری بازمی‌گردد. - **۱۶ — REQUEST_TO_REFUND_TO_MERCHANT_AFTER_CANCELLED_BY_MERCHANT:** استرداد پس از لغو توسط مرچنت؛ وجه به حساب مرچنت برمی‌گردد.  **چگونه اتفاق می‌افتد:** به صورت خودکار پس از رسیدن به وضعیت‌های ناموفق/لغو مربوطه توسط سیستم تنظیم می‌شود.  ---  ### ۱۷. REFUND_COMPLETED — استرداد تکمیل شد  **معنا:** وجه با موفقیت به صاحب آن (مشتری یا مرچنت بسته به نوع استرداد) بازگردانده شده است.  **چگونه اتفاق می‌افتد:** Task پردازش استرداد (`process_order_refund`) پس از تأیید موفق بازگشت وجه از سوی Digipay، وضعیت سفارش را به `REFUND_COMPLETED` تغییر می‌دهد.  **وابستگی‌ها:** یکی از وضعیت‌های درخواست استرداد (۱۳، ۱۴، ۱۵ یا ۱۶) باید فعال باشد و Digipay تراکنش استرداد را تأیید کرده باشد.  </div> 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, replaceWithSerializableTypeIfNeeded } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

export interface AuthStatusResponse {
    /**
     * وضعیت لاگین بودن
     */
    'is_authenticated': boolean;
}
/**
 * Serializer for BusinessAddress model. Used for merchant and shipping addresses.
 */
export interface BusinessAddress {
    'id': number;
    'address': string;
    'postal_code'?: string | null;
    'city_name': string;
    'state_name': string;
    'district_id'?: number | null;
    'district_name'?: string | null;
    'longitude'?: string | null;
    'latitude'?: string | null;
    'building_number'?: string | null;
    'unit'?: string | null;
    'receiver_name'?: string | null;
    'receiver_phone'?: string | null;
    'is_accurate'?: boolean;
    'is_active'?: boolean;
    'created_at': string;
    'modified_at': string;
}
export interface DeliveryTimeRangeDisplay {
    'min_date': string;
    'max_date': string;
}
/**
 * * `User is not authenticated.` - User is not authenticated. * `Order not found.` - نشان یافت نشد * `Order is not in a state where shipping can be selected.` - Order is not in a state where shipping can be selected. * `Order is not in a state where packing can be selected.` - Order is not in a state where packing can be selected. * `Failed to initiate refund. Please try again later.` - Failed to initiate refund. Please try again later. * `Order is expired or cancelled.` - Order is expired or cancelled. * `Invalid request origin.` - مبدأ نامعتبر * `Digi Express shipping method not found.` - مرسوله دیجی اکسپرس برای سفارش %s یافت نشد. * `Order address not found.` - نشان یافت نشد * `Failed to fetch Digi Express shipping time window options.` - خطا در ثبت مرسوله دیجی اکسپرس برای سفارش %s. دلیل: %s * `Address ID not found.` - نشان یافت نشد * `Failed to cancel shipment.` - Failed to cancel shipment. * `Failed to cancel shipment in third party service.` - Failed to cancel shipment in third party service. * `Shipment not found.` - نشان یافت نشد * `Selected shipping method is not eligible for cancellation.` - آیا روش ارسال پرداخت در مقصد است * `DigiExpress shipment is not in cancelable in this state` - مرسوله دیجی اکسپرس برای سفارش %s یافت نشد. * `DigiExpress shipment is not in reviveable in this state` - مرسوله دیجی اکسپرس برای سفارش %s یافت نشد. * `Failed to revive shipment in third party service.` - Failed to revive shipment in third party service. * `Selected shipping method is not eligible for revival.` - شناسه روش ارسال برای استفاده در سفارش
 */

export const ErrorEnum = {
    UserIsNotAuthenticated: 'User is not authenticated.',
    OrderNotFound: 'Order not found.',
    OrderIsNotInAStateWhereShippingCanBeSelected: 'Order is not in a state where shipping can be selected.',
    OrderIsNotInAStateWherePackingCanBeSelected: 'Order is not in a state where packing can be selected.',
    FailedToInitiateRefundPleaseTryAgainLater: 'Failed to initiate refund. Please try again later.',
    OrderIsExpiredOrCancelled: 'Order is expired or cancelled.',
    InvalidRequestOrigin: 'Invalid request origin.',
    DigiExpressShippingMethodNotFound: 'Digi Express shipping method not found.',
    OrderAddressNotFound: 'Order address not found.',
    FailedToFetchDigiExpressShippingTimeWindowOptions: 'Failed to fetch Digi Express shipping time window options.',
    AddressIdNotFound: 'Address ID not found.',
    FailedToCancelShipment: 'Failed to cancel shipment.',
    FailedToCancelShipmentInThirdPartyService: 'Failed to cancel shipment in third party service.',
    ShipmentNotFound: 'Shipment not found.',
    SelectedShippingMethodIsNotEligibleForCancellation: 'Selected shipping method is not eligible for cancellation.',
    DigiExpressShipmentIsNotInCancelableInThisState: 'DigiExpress shipment is not in cancelable in this state',
    DigiExpressShipmentIsNotInReviveableInThisState: 'DigiExpress shipment is not in reviveable in this state',
    FailedToReviveShipmentInThirdPartyService: 'Failed to revive shipment in third party service.',
    SelectedShippingMethodIsNotEligibleForRevival: 'Selected shipping method is not eligible for revival.',
} as const;

export type ErrorEnum = typeof ErrorEnum[keyof typeof ErrorEnum];


/**
 * * `1` - آنلاین * `2` - BNPL (الان بخر، بعداً پرداخت کن) * `3` - اعتباری * `4` - کیف پول دیجی‌پی * `5` - اقساط پیش‌فرض
 */

export const GatewayTypeEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
} as const;

export type GatewayTypeEnum = typeof GatewayTypeEnum[keyof typeof GatewayTypeEnum];


export interface Merchant {
    'name'?: string | null;
    'domain': string;
    'logo': string;
}
export interface MerchantOrderCancelShipmentResponse {
    /**
     * پیام موفق‌‌
     */
    'message': string;
    /**
     * شناسه منحصر به فرد سفارش
     */
    'order_uuid': string;
    /**
     * وضعیت فعلی سفارش  * `1` - اولیه * `2` - شروع در * `3` - در انتظار * `4` - در انتظار درگاه * `5` - منقضی شده * `6` - لغو شده * `7` - ممنوع شده توسط ما * `8` - ناموفق در پرداخت * `9` - تأیید شده توسط فروشنده * `10` - ناموفق در تأیید توسط فروشنده * `11` - فروشگاه * `12` - لغو شده توسط فروشنده * `13` - درخواست بازگرداندن وجه به مشتری به دلیل درخواست مشتری * `14` - درخواست بازگرداندن وجه به فروشنده پس از ناموفقی در تأیید توسط فروشنده * `15` - درخواست بازگرداندن وجه به مشتری پس از ناموفقی توسط فروشنده * `16` - بازگردانده شده به فروشنده پس از لغو توسط فروشنده * `17` - بازگرداندن وجه تکمیل شد * `18` - زمان مجاز برای منقضی کردن گذشته است * `19` - تحویل نشده * `20` - مرسوله
     */
    'status': OrderStatusEnum;
    /**
     * وضعیت قابل‌خواندن
     */
    'status_display': string;
}


export interface MerchantOrderRefundResponse {
    'message': string;
    'order_uuid': string;
    'status': OrderStatusEnum;
    'status_display': string;
    'refund_reason': string;
}


export interface MerchantOrderReviveShipmentResponse {
    /**
     * پیام موفق‌‌
     */
    'message': string;
    /**
     * شناسه منحصر به فرد سفارش
     */
    'order_uuid': string;
    /**
     * وضعیت فعلی سفارش  * `1` - اولیه * `2` - شروع در * `3` - در انتظار * `4` - در انتظار درگاه * `5` - منقضی شده * `6` - لغو شده * `7` - ممنوع شده توسط ما * `8` - ناموفق در پرداخت * `9` - تأیید شده توسط فروشنده * `10` - ناموفق در تأیید توسط فروشنده * `11` - فروشگاه * `12` - لغو شده توسط فروشنده * `13` - درخواست بازگرداندن وجه به مشتری به دلیل درخواست مشتری * `14` - درخواست بازگرداندن وجه به فروشنده پس از ناموفقی در تأیید توسط فروشنده * `15` - درخواست بازگرداندن وجه به مشتری پس از ناموفقی توسط فروشنده * `16` - بازگردانده شده به فروشنده پس از لغو توسط فروشنده * `17` - بازگرداندن وجه تکمیل شد * `18` - زمان مجاز برای منقضی کردن گذشته است * `19` - تحویل نشده * `20` - مرسوله
     */
    'status': OrderStatusEnum;
    /**
     * وضعیت قابل‌خواندن
     */
    'status_display': string;
}


/**
 * Serializer for manager view listing PAID_BY_USER orders
 */
export interface MerchantPaidOrderList {
    'order_uuid': string;
    /**
     * شناسه منحصر به فرد سفارش در سیستم فروشنده
     */
    'merchant_order_id': string;
    /**
     * شناسه منحصر به فرد برای پذیرنده برای تأیید سفارش
     */
    'merchant_unique_id': string;
    'paid_at': string | null;
    'refunds_at': string | null;
}

export const NullEnum = {
} as const;

export type NullEnum = typeof NullEnum[keyof typeof NullEnum];


export interface Option {
    /**
     * نوع ویژگی محصول: رنگ، سایز، گارانتی، وزن یا سایر  * `color` - رنگ * `size` - اندازه * `warranty` - گارانتی * `weight` - وزن * `other` - سایر
     */
    'type_name': TypeNameEnum;
    /**
     * نام ویژگی (مثلاً \'قرمز\' برای رنگ قرمز، \'XL\' برای سایز)
     */
    'name': string;
    /**
     * مقدار ویژگی (مثلاً \'#FF0000\' برای کد رنگ یا مقدار دیگر)
     */
    'value': string;
    /**
     * اگر نوع ویژگی رنگ است درست است، وگرنه غلط
     */
    'is_color'?: boolean;
}


export interface OrderCreate {
    /**
     * شناسه منحصر به فرد این سفارش در سیستم فروشنده
     */
    'merchant_order_id': string;
    /**
     * شناسه منحصر به فرد برای تأیید اصالت سفارش
     */
    'merchant_unique_id': string;
    /**
     * مجموع قیمت‌های اولیه تمام کالاها بدون تخفیف (به تومان)
     */
    'main_amount'?: number;
    /**
     * مبلغ نهایی: مبلغ_اصلی - مبلغ_تخفیف + مبلغ_مالیات (به تومان)
     */
    'final_amount'?: number;
    /**
     * مبلغ کل پرداخت شده توسط کاربر: مبلغ_نهایی + هزینه_ارسال (به تومان)
     */
    'total_paid_amount'?: number;
    /**
     * مبلغ کل تخفیف برای تمام سفارش (به تومان)
     */
    'discount_amount'?: number;
    /**
     * مبلغ کل مالیات برای تمام سفارش (به تومان)
     */
    'tax_amount'?: number;
    /**
     * هزینه ارسال برای سفارش (به تومان)
     */
    'shipping_amount'?: number;
    /**
     * مبلغ تخفیف باشگاه مشتریان/پاداش (به تومان)
     */
    'loyalty_amount'?: number;
    /**
     * آدرس وب‌هوک برای دریافت اطلاع رسانی وضعیت پرداخت
     */
    'callback_url': string;
    'destination_address': any | null;
    'items': Array<OrderItemCreate>;
    /**
     * مقدار توسط سیستم جایگذاری می شود
     */
    'merchant'?: number;
    /**
     * مقدار توسط سیستم جایگذاری می شود
     */
    'source_address'?: any | null;
    'user': number | null;
    /**
     * مهلت پرداخت (به عنوان Unix timestamp) قبل از اتمام سفارش
     */
    'reservation_expired_at'?: number | null;
    /**
     * کد مرجع منحصر به فرد برای پیگیری سفارش مشتری (فرمت: BD-XXXXXXXX)
     */
    'reference_code': string;
    /**
     * زمان آمادهسازی سفارش (به روز)
     */
    'preparation_time'?: number;
    /**
     * وزن کل سفارش (بر حسب گرم)
     */
    'weight'?: number;
}
export interface OrderCreateResponse {
    'order_start_url': string;
    'order_uuid': string;
}
export interface OrderDetail {
    'id': number;
    'created_at': string;
    'order_uuid': string;
    /**
     * Unix timestamp تا زمانی که سفارش برای پرداخت رزرو شده است
     */
    'reservation_expired_at': number | null;
    /**
     * شناسه منحصر به فرد سفارش در سیستم فروشنده
     */
    'merchant_order_id': string;
    'status': OrderStatusEnum;
    'status_display': string;
    /**
     * مجموع قیمت‌های اولیه تمام کالاها بدون تخفیف (به تومان)
     */
    'main_amount': number;
    /**
     * قیمت نهایی قابل پرداخت توسط مشتری: مبلغ_اصلی - مبلغ_تخفیف + مبلغ_مالیات (به تومان)
     */
    'final_amount': number;
    /**
     * مبلغ کل پرداخت شده توسط کاربر: مبلغ_نهایی + هزینه_ارسال (به تومان)
     */
    'total_paid_amount': number;
    /**
     * کل تخفیف اعمال شده بر سفارش (به تومان)
     */
    'discount_amount': number;
    /**
     * مبلغ کل مالیات برای سفارش (به تومان)
     */
    'tax_amount': number;
    /**
     * هزینه ارسال برای سفارش (به تومان)
     */
    'shipping_amount': number;
    /**
     * مقدار تخفیف از برنامه باشگاه مشتریان/پاداش (به تومان)
     */
    'loyalty_amount': number;
    /**
     * آدرسی برای دریافت اطلاع رسانی وضعیت پرداخت پس از تکمیل سفارش
     */
    'callback_url': string;
    'merchant': Merchant;
    'items': Array<OrderItemCreate>;
    'source_address': any;
    'destination_address': any;
    'selected_shipping_method': ShippingMethod;
    'shipping_selected_at': string | null;
    'address_selected_at': string | null;
    /**
     * هزینه روش بسته‌بندی انتخاب‌شده (به تومان)
     */
    'packing_amount': number;
    'packing_selected_at': string | null;
    'selected_packing': Packing;
    'can_select_packing': boolean;
    'can_select_shipping': boolean;
    'can_select_address': boolean;
    'can_proceed_to_payment': boolean;
    'is_paid': boolean;
    'user': OrderUser;
    'payment': PaymentOrder;
    /**
     * زمان آمادهسازی سفارش (به روز)
     */
    'preparation_time': number;
    /**
     * وزن کل سفارش (بر حسب گرم)
     */
    'weight': number;
    'selected_shipping_data': { [key: string]: any; };
    /**
     * کد مرجع منحصر به فرد برای پیگیری سفارش مشتری (فرمت: BD-XXXXXXXX)
     */
    'reference_code': string;
    'promotion_discount_amount': number;
    'promotion_data': { [key: string]: any; };
    /**
     * مبلغ نشانه‌گذاری برای سفارش (به تومان)
     */
    'digipay_markup_amount': number;
    /**
     * درصد کمیسیون نشانه‌گذاری برای سفارش (به درصد)
     */
    'markup_commission_percentage': number;
    'previous_status': OrderStatusEnum | null;
    'previous_status_display': string;
}


export interface OrderError {
    'error': ErrorEnum;
}


export interface OrderItemCreate {
    /**
     * نام کامل محصول شامل تمام مشخصات
     */
    'name': string;
    /**
     * قیمت اولیه برای هر واحد بدون تخفیف (به تومان)
     */
    'primary_amount'?: number;
    /**
     * قیمت نهایی برای تمام واحدها بعد از تخفیف (به تومان)
     */
    'amount'?: number;
    /**
     * تعداد واحدهای این کالا در سفارش
     */
    'count': number;
    /**
     * مبلغ کل تخفیف برای این کالا (به تومان)
     */
    'discount_amount'?: number;
    /**
     * مبلغ کل مالیات برای این کالا (به تومان)
     */
    'tax_amount'?: number;
    /**
     * آدرس تصویر محصول
     */
    'image_link'?: string | null;
    'options': Array<Option>;
    /**
     * زمان آمادهسازی کالا (به روز)
     */
    'preparation_time'?: number;
    /**
     * وزن کالا (بر حسب گرم)
     */
    'weight'?: number;
}
/**
 * * `1` - اولیه * `2` - شروع در * `3` - در انتظار * `4` - در انتظار درگاه * `5` - منقضی شده * `6` - لغو شده * `7` - ممنوع شده توسط ما * `8` - ناموفق در پرداخت * `9` - تأیید شده توسط فروشنده * `10` - ناموفق در تأیید توسط فروشنده * `11` - فروشگاه * `12` - لغو شده توسط فروشنده * `13` - درخواست بازگرداندن وجه به مشتری به دلیل درخواست مشتری * `14` - درخواست بازگرداندن وجه به فروشنده پس از ناموفقی در تأیید توسط فروشنده * `15` - درخواست بازگرداندن وجه به مشتری پس از ناموفقی توسط فروشنده * `16` - بازگردانده شده به فروشنده پس از لغو توسط فروشنده * `17` - بازگرداندن وجه تکمیل شد * `18` - زمان مجاز برای منقضی کردن گذشته است * `19` - تحویل نشده * `20` - مرسوله
 */

export const OrderStatusEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9,
    NUMBER_10: 10,
    NUMBER_11: 11,
    NUMBER_12: 12,
    NUMBER_13: 13,
    NUMBER_14: 14,
    NUMBER_15: 15,
    NUMBER_16: 16,
    NUMBER_17: 17,
    NUMBER_18: 18,
    NUMBER_19: 19,
    NUMBER_20: 20,
} as const;

export type OrderStatusEnum = typeof OrderStatusEnum[keyof typeof OrderStatusEnum];


export interface OrderUser {
    'first_name'?: string;
    'last_name'?: string;
    'phone_number'?: string;
    'national_identity_number'?: string | null;
    'birth_date'?: string | null;
}
export interface Packing {
    'id': number;
    /**
     * نام روش/گزینه بسته‌بندی
     */
    'name': string;
    /**
     * هزینه بسته بندی به تومان
     */
    'price'?: number;
}
export interface PaginatedMerchantPaidOrderListList {
    'next'?: string | null;
    'previous'?: string | null;
    'results': Array<MerchantPaidOrderList>;
}
export interface PaginatedOrderDetailList {
    'next'?: string | null;
    'previous'?: string | null;
    'results': Array<OrderDetail>;
}
export interface PaymentOrder {
    'final_amount': number;
    'gateway_type': GatewayTypeEnum;
    'gateway_type_display': string;
    'paid_at': string;
    'gateway_name': string | null;
    'invoice_id': string | null;
    'settlement_date': string;
    'settlement_status': number;
    'settlement_status_display': string;
}


/**
 * Serializer for refunding an order.
 */
export interface RefundOrder {
    /**
     * دلیل اختیاری برای بازگرداندن وجه
     */
    'reason'?: string;
}
export interface ReviveShipment {
    /**
     * زمان آمادهسازی سفارش (به روز)
     */
    'preparation_time'?: number | null;
}
/**
 * Serializer for shipping method details.
 */
export interface ShippingMethod {
    'id': number;
    /**
     * نام روش/گزینه بسته‌بندی
     */
    'name': string;
    /**
     * شناسه روش ارسال برای استفاده در سفارش
     */
    'description'?: string;
    /**
     * شناسه وضعیت ارسال از دیجی اکسپرس  * `1` - سایر * `2` - دیجی اکسپرس
     */
    'shipping_type'?: ShippingTypeEnum;
    'get_shipping_type_display': string;
    'shipping_type_display': string;
    /**
     * هزینه ارسال برای منطقه اصلی (مثلاً تهران) به تومان
     */
    'cost'?: number;
    /**
     * هزینه ارسال برای مناطق دیگر به تومان
     */
    'secondary_cost'?: number;
    /**
     * حداقل تعداد روز از تاریخ سفارش تا تحویل
     */
    'minimum_time_sending'?: number;
    /**
     * Maximum number of days from order date to delivery
     */
    'maximum_time_sending'?: number;
    'delivery_time_display': string;
    'delivery_time_range_display': DeliveryTimeRangeDisplay;
    'inventory_address': BusinessAddress;
    /**
     * آیا روش ارسال پرداخت در مقصد است
     */
    'is_pay_at_destination'?: boolean;
}


/**
 * * `1` - سایر * `2` - دیجی اکسپرس
 */

export const ShippingTypeEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
} as const;

export type ShippingTypeEnum = typeof ShippingTypeEnum[keyof typeof ShippingTypeEnum];


/**
 * * `color` - رنگ * `size` - اندازه * `warranty` - گارانتی * `weight` - وزن * `other` - سایر
 */

export const TypeNameEnum = {
    Color: 'color',
    Size: 'size',
    Warranty: 'warranty',
    Weight: 'weight',
    Other: 'other',
} as const;

export type TypeNameEnum = typeof TypeNameEnum[keyof typeof TypeNameEnum];


export interface UpdateOrderStatus {
    /**
     * وضعیتی برای به‌روزرسانی سفارش  * `1` - اولیه * `2` - شروع در * `3` - در انتظار * `4` - در انتظار درگاه * `5` - منقضی شده * `6` - لغو شده * `7` - ممنوع شده توسط ما * `8` - ناموفق در پرداخت * `9` - تأیید شده توسط فروشنده * `10` - ناموفق در تأیید توسط فروشنده * `11` - فروشگاه * `12` - لغو شده توسط فروشنده * `13` - درخواست بازگرداندن وجه به مشتری به دلیل درخواست مشتری * `14` - درخواست بازگرداندن وجه به فروشنده پس از ناموفقی در تأیید توسط فروشنده * `15` - درخواست بازگرداندن وجه به مشتری پس از ناموفقی توسط فروشنده * `16` - بازگردانده شده به فروشنده پس از لغو توسط فروشنده * `17` - بازگرداندن وجه تکمیل شد * `18` - زمان مجاز برای منقضی کردن گذشته است * `19` - تحویل نشده * `20` - مرسوله
     */
    'status': OrderStatusEnum;
}


export interface VerifyOrder {
    /**
     * شناسه منحصر به فرد ارسال شده هنگام ایجاد سفارش برای تأیید اصالت سفارش
     */
    'merchant_unique_id': string;
}
export interface WalletBalance {
    /**
     * موجودی کیف پول فعلی (برحسب تومان)
     */
    'amount'?: number;
    /**
     * مهلت تسویه تراز منفی
     */
    'negative_settlement_deadline': string | null;
}

/**
 * DefaultApi - axios parameter creator
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  بررسی وضعیت احراز هویت فروشنده  ## توضیحات  این endpoint برای بررسی اعتبار **API_KEY** فروشنده استفاده می‌شود. اگر کلید معتبر باشد، پاسخ `is_authenticated: true` برمی‌گردد. از این endpoint برای تأیید صحت کلید API قبل از شروع عملیات استفاده کنید.  نیاز به **API_KEY** فروشنده دارد (فقط Header لازم است، بدنه درخواست ندارد).  </div> 
         * @summary وضعیت لاگین بودن
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        merchantApiV1AuthStatusRetrieve: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/merchant/api/v1/auth/status/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication MerchantAPIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  ساخت سفارش جدید در سیستم BWDK  ## توضیحات  این endpoint برای ایجاد یک سفارش جدید در سیستم خرید با دیجی‌کالا استفاده می‌شود. در این درخواست باید اطلاعات سفارش، اقلام سبد خرید، و آدرس callback شامل شود.  برای شروع ارتباط با سرویس‌های **خرید با دیجی‌کالا** شما باید دارای **API_KEY** باشید که این مورد از سمت تیم دیجی‌فای در اختیار شما قرار خواهد گرفت.  ### روند کاری  **مرحله ۱: درخواست ساخت سفارش**  کاربر پس از انتخاب کالاهای خود در سبد خرید، بر روی دکمه **خرید با دیجی‌کالا** کلیک می‌کند و بک‌اند مرچنت درخواستی برای ساخت سفارش BWDK دریافت می‌کند. در این مرحله اولین درخواست خود را به بک‌اند BWDK ارسال می‌نمایید:  BWDK یک سفارش جدید برای مرچنت با وضعیت **INITIAL** ایجاد می‌کند و **order_uuid** را جنریت می‌کند. آدرس **order_start_url** نقطه شروع مسیر تکمیل سفارش است (انتخاب آدرس، شیپینگ، پکینگ، پرداخت و غیره). <br> </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API     participant C as مشتری     participant PG as درگاه پرداخت      M->>API: POST /api/v1/orders/create     Note over M,API: شناسه سفارش, کالاها, مبلغ, callback_url     API-->>M: {لینک شروع سفارش, شناسه سفارش}      M->>C: تغییر مسیر به لینک شروع      C->>API: تکمیل درخواست خرید توسط مشتری     API->>PG: شروع فرآیند پرداخت     PG-->>C: نتیجه پرداخت     PG->>API: تأیید پرداخت     API-->>C: تغییر مسیر به callback_url      M->>API: POST /api/v1/orders/manager/{uuid}/verify     Note over M,API: {شناسه منحصربفرد فروشنده}     API-->>M: سفارش تأیید شد و آماده ارسال است ```  </div> 
         * @summary ساخت سفارش
         * @param {OrderCreate} orderCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1CreateOrderCreate: async (orderCreate: OrderCreate, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orderCreate' is not null or undefined
            assertParamExists('orderApiV1CreateOrderCreate', 'orderCreate', orderCreate)
            const localVarPath = `/order/api/v1/create-order/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication MerchantAPIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(orderCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  لغو مرسوله دیجی‌اکسپرس  ## توضیحات  این endpoint برای لغو یک مرسوله ثبت‌شده در سرویس دیجی‌اکسپرس استفاده می‌شود. پس از لغو موفق، مرسوله از صف ارسال خارج می‌شود.  نیاز به **API_KEY** فروشنده دارد.  ## شرایط لغو  * سفارش باید دارای روش ارسال **DigiExpress** باشد * مرسوله باید در وضعیت **در انتظار تحویل به پیک** (Request for Pickup) باشد  </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API     participant DX as دیجی‌اکسپرس      M->>API: POST /order/api/v1/manager/{order_uuid}/cancel-shipment/     Note over M,API: Header: X-API-KEY (بدون بدنه)      alt روش ارسال DigiExpress نیست         API-->>M: 400 خطا         Note over API,M: {error: \"Selected shipping method is not DigiExpress\"}     else مرسوله قابل لغو نیست         API-->>M: 400 خطا         Note over API,M: {error: \"...\"}     else لغو موفق         API->>DX: لغو مرسوله         DX-->>API: تأیید لغو         API-->>M: 200 موفق         Note over API,M: {message, order_uuid, status, status_display}     end ``` 
         * @summary لغو ارسال سفارش
         * @param {string} orderUuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerCancelShipmentCreate: async (orderUuid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orderUuid' is not null or undefined
            assertParamExists('orderApiV1ManagerCancelShipmentCreate', 'orderUuid', orderUuid)
            const localVarPath = `/order/api/v1/manager/{order_uuid}/cancel-shipment/`
                .replace(`{${"order_uuid"}}`, encodeURIComponent(String(orderUuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication MerchantAPIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  تغییر روش ارسال سفارش  ## توضیحات  این endpoint به فروشنده اجازه می‌دهد روش ارسال یک سفارش را تغییر دهد. این عملیات معمولاً زمانی استفاده می‌شود که فروشنده بخواهد از DigiExpress به روش ارسال پیش‌فرض (یا بالعکس) تغییر دهد.  نیاز به **API_KEY** فروشنده دارد.  ## پارامترهای ورودی  * **updated_shipping**: شناسه روش ارسال جدید * **preparation_time** (اختیاری): زمان آماده‌سازی (روز) برای DigiExpress  </div> 
         * @summary تغییر روش ارسال
         * @param {string} orderUuid 
         * @param {OrderDetail} orderDetail 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerChangeShippingMethodUpdate: async (orderUuid: string, orderDetail: OrderDetail, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orderUuid' is not null or undefined
            assertParamExists('orderApiV1ManagerChangeShippingMethodUpdate', 'orderUuid', orderUuid)
            // verify required parameter 'orderDetail' is not null or undefined
            assertParamExists('orderApiV1ManagerChangeShippingMethodUpdate', 'orderDetail', orderDetail)
            const localVarPath = `/order/api/v1/manager/{order_uuid}/change-shipping-method/`
                .replace(`{${"order_uuid"}}`, encodeURIComponent(String(orderUuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication MerchantAPIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(orderDetail, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  لیست سفارشات فروشنده  ## توضیحات  این endpoint لیست تمام سفارشات مرتبط با فروشنده را با امکان فیلتر، جستجو و مرتب‌سازی برمی‌گرداند. نتایج به صورت صفحه‌بندی‌شده (Cursor Pagination) ارسال می‌شوند و به ترتیب جدیدترین سفارش اول مرتب می‌شوند.  نیاز به **API_KEY** فروشنده دارد.  ## پارامترهای فیلتر  * **status**: وضعیت سفارش (INITIAL, PENDING, PAID_BY_USER, VERIFIED_BY_MERCHANT, ...) * **created_at__gte / created_at__lte**: فیلتر بر اساس تاریخ ایجاد * **search**: جستجو در شماره تلفن مشتری، نام، کد مرجع، شناسه سفارش مرچنت * **ordering**: مرتب‌سازی بر اساس created_at, final_amount, status, merchant_order_id  </div> 
         * @summary لیست سفارشات
         * @param {string} [cities] 
         * @param {string} [createdAt] 
         * @param {string} [cursor] مقدار نشانگر صفحه‌بندی.
         * @param {string} [orderIds] 
         * @param {string} [ordering] کدام فیلد باید هنگام مرتب‌سازی نتایج استفاده شود.
         * @param {string} [paymentTypes] 
         * @param {string} [provinces] 
         * @param {string} [referenceCode] 
         * @param {string} [search] یک عبارت جستجو.
         * @param {string} [shippingTypes] 
         * @param {OrderApiV1ManagerListStatusEnum} [status] * &#x60;1&#x60; - اولیه * &#x60;2&#x60; - شروع در * &#x60;3&#x60; - در انتظار * &#x60;4&#x60; - در انتظار درگاه * &#x60;5&#x60; - منقضی شده * &#x60;6&#x60; - لغو شده * &#x60;7&#x60; - ممنوع شده توسط ما * &#x60;8&#x60; - ناموفق در پرداخت * &#x60;9&#x60; - تأیید شده توسط فروشنده * &#x60;10&#x60; - ناموفق در تأیید توسط فروشنده * &#x60;11&#x60; - فروشگاه * &#x60;12&#x60; - لغو شده توسط فروشنده * &#x60;13&#x60; - درخواست بازگرداندن وجه به مشتری به دلیل درخواست مشتری * &#x60;14&#x60; - درخواست بازگرداندن وجه به فروشنده پس از ناموفقی در تأیید توسط فروشنده * &#x60;15&#x60; - درخواست بازگرداندن وجه به مشتری پس از ناموفقی توسط فروشنده * &#x60;16&#x60; - بازگردانده شده به فروشنده پس از لغو توسط فروشنده * &#x60;17&#x60; - بازگرداندن وجه تکمیل شد * &#x60;18&#x60; - زمان مجاز برای منقضی کردن گذشته است * &#x60;19&#x60; - تحویل نشده * &#x60;20&#x60; - مرسوله
         * @param {string} [statuses] 
         * @param {boolean} [todayPickup] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerList: async (cities?: string, createdAt?: string, cursor?: string, orderIds?: string, ordering?: string, paymentTypes?: string, provinces?: string, referenceCode?: string, search?: string, shippingTypes?: string, status?: OrderApiV1ManagerListStatusEnum, statuses?: string, todayPickup?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/order/api/v1/manager/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication MerchantAPIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (cities !== undefined) {
                localVarQueryParameter['cities'] = cities;
            }

            if (createdAt !== undefined) {
                localVarQueryParameter['created_at'] = (createdAt as any instanceof Date) ?
                    (createdAt as any).toISOString().substring(0,10) :
                    createdAt;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (orderIds !== undefined) {
                localVarQueryParameter['order_ids'] = orderIds;
            }

            if (ordering !== undefined) {
                localVarQueryParameter['ordering'] = ordering;
            }

            if (paymentTypes !== undefined) {
                localVarQueryParameter['payment_types'] = paymentTypes;
            }

            if (provinces !== undefined) {
                localVarQueryParameter['provinces'] = provinces;
            }

            if (referenceCode !== undefined) {
                localVarQueryParameter['reference_code'] = referenceCode;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (shippingTypes !== undefined) {
                localVarQueryParameter['shipping_types'] = shippingTypes;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (statuses !== undefined) {
                localVarQueryParameter['statuses'] = statuses;
            }

            if (todayPickup !== undefined) {
                localVarQueryParameter['today_pickup'] = todayPickup;
            }

            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * لیست تمامی سفارشاتی که توسط کاربر پرداخت شده اند ولی توسط فروشنده تایید نشده اند. 
         * @summary سفارش پرداخت‌شده و تایید‌نشده
         * @param {string} [cities] 
         * @param {string} [createdAt] 
         * @param {string} [cursor] مقدار نشانگر صفحه‌بندی.
         * @param {string} [orderIds] 
         * @param {string} [ordering] کدام فیلد باید هنگام مرتب‌سازی نتایج استفاده شود.
         * @param {string} [paymentTypes] 
         * @param {string} [provinces] 
         * @param {string} [referenceCode] 
         * @param {string} [search] یک عبارت جستجو.
         * @param {string} [shippingTypes] 
         * @param {OrderApiV1ManagerPaidListStatusEnum} [status] * &#x60;1&#x60; - اولیه * &#x60;2&#x60; - شروع در * &#x60;3&#x60; - در انتظار * &#x60;4&#x60; - در انتظار درگاه * &#x60;5&#x60; - منقضی شده * &#x60;6&#x60; - لغو شده * &#x60;7&#x60; - ممنوع شده توسط ما * &#x60;8&#x60; - ناموفق در پرداخت * &#x60;9&#x60; - تأیید شده توسط فروشنده * &#x60;10&#x60; - ناموفق در تأیید توسط فروشنده * &#x60;11&#x60; - فروشگاه * &#x60;12&#x60; - لغو شده توسط فروشنده * &#x60;13&#x60; - درخواست بازگرداندن وجه به مشتری به دلیل درخواست مشتری * &#x60;14&#x60; - درخواست بازگرداندن وجه به فروشنده پس از ناموفقی در تأیید توسط فروشنده * &#x60;15&#x60; - درخواست بازگرداندن وجه به مشتری پس از ناموفقی توسط فروشنده * &#x60;16&#x60; - بازگردانده شده به فروشنده پس از لغو توسط فروشنده * &#x60;17&#x60; - بازگرداندن وجه تکمیل شد * &#x60;18&#x60; - زمان مجاز برای منقضی کردن گذشته است * &#x60;19&#x60; - تحویل نشده * &#x60;20&#x60; - مرسوله
         * @param {string} [statuses] 
         * @param {boolean} [todayPickup] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerPaidList: async (cities?: string, createdAt?: string, cursor?: string, orderIds?: string, ordering?: string, paymentTypes?: string, provinces?: string, referenceCode?: string, search?: string, shippingTypes?: string, status?: OrderApiV1ManagerPaidListStatusEnum, statuses?: string, todayPickup?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/order/api/v1/manager/paid/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication MerchantAPIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (cities !== undefined) {
                localVarQueryParameter['cities'] = cities;
            }

            if (createdAt !== undefined) {
                localVarQueryParameter['created_at'] = (createdAt as any instanceof Date) ?
                    (createdAt as any).toISOString().substring(0,10) :
                    createdAt;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (orderIds !== undefined) {
                localVarQueryParameter['order_ids'] = orderIds;
            }

            if (ordering !== undefined) {
                localVarQueryParameter['ordering'] = ordering;
            }

            if (paymentTypes !== undefined) {
                localVarQueryParameter['payment_types'] = paymentTypes;
            }

            if (provinces !== undefined) {
                localVarQueryParameter['provinces'] = provinces;
            }

            if (referenceCode !== undefined) {
                localVarQueryParameter['reference_code'] = referenceCode;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (shippingTypes !== undefined) {
                localVarQueryParameter['shipping_types'] = shippingTypes;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (statuses !== undefined) {
                localVarQueryParameter['statuses'] = statuses;
            }

            if (todayPickup !== undefined) {
                localVarQueryParameter['today_pickup'] = todayPickup;
            }

            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\"> بازگشت و لغو سفارش  ## توضیحات  این endpoint برای بازگشت یا لغو سفارشی استفاده می‌شود که قبلاً پرداخت شده یا تایید شده است. در این مرحله مبلغ سفارش به کاربر بازگشت داده می‌شود و وضعیت سفارش به **REFUNDED** تغییر می‌یابد.   ## شرایط بازگشت  سفارش باید در یکی از وضعیت‌های زیر باشد تا بازگشت امکان‌پذیر باشد: * **PAID_BY_USER**: سفارش پرداخت شده است اما هنوز تایید نشده * **VERIFIED_BY_MERCHANT**: سفارش تایید شده است  سفارش نباید قبلاً بازگشت داده شده باشد.  **پاسخ خطا** - اگر سفارش در وضعیت مناسب نباشد یا قبلاً بازگشت داده شده باشد </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API      M->>API: POST /api/v1/orders/manager/{uuid}/refund     Note over M,API: {reason: \"درخواست مشتری\"}      alt سفارش قابل بازگشت نیست         API-->>M: 500 خطا         Note over API,M: {error: \"شروع بازگشت ناموفق بود.<br/>لطفاً دوباره تلاش کنید.\"}     else سفارش معتبر است         API-->>M: 200 موفق         Note over API,M: {message: \"درخواست بازگشت با<br/>موفقیت شروع شد\",<br/>order_uuid, status: 13,<br/>status_display,<br/>refund_reason}          M->>API: GET /api/v1/orders/manager/{uuid}         Note over M,API: بررسی وضعیت سفارش<br/>(endpoint جداگانه /refund/status وجود ندارد)          alt status: 17 (بازگشت تکمیل شد)             API-->>M: 200 موفق             Note over API,M: {order_uuid, status: 17,<br/>status_display: \"بازگشت تکمیل شد\",<br/>metadata.refund_tracking_code,<br/>metadata.refund_completed_at}          else status: 13 (در حال پردازش)             API-->>M: 200 موفق             Note over API,M: {order_uuid, status: 13,<br/>status_display: \"درخواست بازگشت به مشتری<br/>به دلیل درخواست<br/>مشتری\",<br/>metadata.refund_reason}          else status: قبلی (بازگشت ناموفق)             API-->>M: 200 موفق             Note over API,M: {order_uuid, status: (قبلی),<br/>metadata.refund_error,<br/>metadata.refund_failed_at}         end     end ``` 
         * @summary بازگشت سفارش
         * @param {string} orderUuid 
         * @param {RefundOrder} [refundOrder] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerRefundCreate: async (orderUuid: string, refundOrder?: RefundOrder, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orderUuid' is not null or undefined
            assertParamExists('orderApiV1ManagerRefundCreate', 'orderUuid', orderUuid)
            const localVarPath = `/order/api/v1/manager/{order_uuid}/refund/`
                .replace(`{${"order_uuid"}}`, encodeURIComponent(String(orderUuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication MerchantAPIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(refundOrder, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  # مدیریت سفارشات  ## توضیحات  این endpoint برای مدیریت و مشاهده سفارشات فروشنده استفاده می‌شود.  </div> 
         * @summary دریافت سفارش
         * @param {string} orderUuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerRetrieve: async (orderUuid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orderUuid' is not null or undefined
            assertParamExists('orderApiV1ManagerRetrieve', 'orderUuid', orderUuid)
            const localVarPath = `/order/api/v1/manager/{order_uuid}/`
                .replace(`{${"order_uuid"}}`, encodeURIComponent(String(orderUuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication MerchantAPIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  احیای مرسوله دیجی‌اکسپرس  ## توضیحات  این endpoint برای احیای (reactivate) یک مرسوله دیجی‌اکسپرس که قبلاً لغو شده یا در وضعیت غیرفعال است استفاده می‌شود. با ارسال `preparation_time` (زمان آماده‌سازی بر حسب روز)، زمان جدید آماده بودن بار تنظیم می‌شود.  نیاز به **API_KEY** فروشنده دارد.  ## پارامترهای ورودی  * **preparation_time** (اختیاری، پیش‌فرض: ۲): تعداد روز تا آماده‌شدن بار برای تحویل به پیک  ## شرایط  * سفارش باید دارای روش ارسال **DigiExpress** باشد * مرسوله باید در وضعیت قابل احیا باشد  </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API     participant DX as دیجی‌اکسپرس      M->>API: POST /order/api/v1/manager/{order_uuid}/revive-shipment/     Note over M,API: Header: X-API-KEY<br/>{preparation_time: 2}      alt روش ارسال DigiExpress نیست         API-->>M: 400 خطا         Note over API,M: {error: \"Selected shipping method is not DigiExpress\"}     else احیا موفق         API->>DX: احیای مرسوله با زمان جدید         DX-->>API: تأیید احیا         API-->>M: 200 موفق         Note over API,M: {message, order_uuid, status, status_display}     end ``` 
         * @summary احیای ارسال سفارش
         * @param {string} orderUuid 
         * @param {ReviveShipment} [reviveShipment] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerReviveShipmentCreate: async (orderUuid: string, reviveShipment?: ReviveShipment, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orderUuid' is not null or undefined
            assertParamExists('orderApiV1ManagerReviveShipmentCreate', 'orderUuid', orderUuid)
            const localVarPath = `/order/api/v1/manager/{order_uuid}/revive-shipment/`
                .replace(`{${"order_uuid"}}`, encodeURIComponent(String(orderUuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication MerchantAPIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(reviveShipment, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  بروزرسانی وضعیت سفارش  ## توضیحات  این endpoint به فروشنده امکان می‌دهد وضعیت یک سفارش را به‌صورت مستقیم تغییر دهد. این endpoint برای مواردی مانند علامت‌گذاری سفارش به‌عنوان «ارسال شده» یا «تحویل داده شده» توسط فروشنده استفاده می‌شود.  نیاز به **API_KEY** فروشنده دارد.  ## وضعیت‌های مجاز  * **DELIVERED**: تحویل شد * **DISPATCHED**: ارسال شد * سایر وضعیت‌های تعریف‌شده در سیستم  </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API      M->>API: PUT /order/api/v1/manager/{order_uuid}/update-status/     Note over M,API: Header: X-API-KEY<br/>{status: \"DELIVERED\"}      alt وضعیت معتبر است         API-->>M: 200 موفق         Note over API,M: اطلاعات کامل سفارش با وضعیت جدید     else وضعیت نامعتبر است         API-->>M: 400 خطا         Note over API,M: {error: \"invalid status\"}     end ``` 
         * @summary به‌روزرسانی وضعیت سفارش
         * @param {string} orderUuid 
         * @param {UpdateOrderStatus} updateOrderStatus 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerUpdateStatusUpdate: async (orderUuid: string, updateOrderStatus: UpdateOrderStatus, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orderUuid' is not null or undefined
            assertParamExists('orderApiV1ManagerUpdateStatusUpdate', 'orderUuid', orderUuid)
            // verify required parameter 'updateOrderStatus' is not null or undefined
            assertParamExists('orderApiV1ManagerUpdateStatusUpdate', 'updateOrderStatus', updateOrderStatus)
            const localVarPath = `/order/api/v1/manager/{order_uuid}/update-status/`
                .replace(`{${"order_uuid"}}`, encodeURIComponent(String(orderUuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication MerchantAPIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateOrderStatus, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  تایید سفارش پس از پرداخت  ## توضیحات  پس از اتمام فرایند پرداخت توسط کاربر، مرچنت باید سفارش را تایید کند. این endpoint برای تایید و نهایی کردن سفارش پس از پرداخت موفق توسط مشتری استفاده می‌شود. در این مرحله مرچنت سفارش را تایید می‌کند و وضعیت سفارش به **VERIFIED_BY_MERCHANT** تغییر می‌یابد.  ## روند کاری  **مرحله ۲: بازگشت کاربر و دریافت نتیجه**  پس از تکمیل فرایند پرداخت (موفق یا ناموفق)، کاربر به آدرس callback_url که هنگام ساخت سفارش ارسال کرده بودید بازگردانده می‌شود. در این درخواست وضعیت سفارش به صورت query parameters ارسال می‌شود:   **Query Parameters:** * **success**: متغیر منطقی نشان‌دهنده موفق یا ناموفق بودن سفارش * **status**: وضعیت سفارش (PAID، FAILED، وغیره) * **phone_number**: شماره تلفن مشتری * **order_uuid**: شناسه یکتای سفارش * **merchant_order_id**: شناسه سفارش در سیستم مرچنت  **مرحله ۳: تایید سفارش در بک‌اند**  سپس شما باید این endpoint را فراخوانی کنید تا سفارش را تایید کنید و اطمینان حاصل کنید که سفارش موفقیت‌آمیز ثبت شده است: </div> 
         * @summary تایید سفارش
         * @param {string} orderUuid 
         * @param {VerifyOrder} verifyOrder 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerVerifyCreate: async (orderUuid: string, verifyOrder: VerifyOrder, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orderUuid' is not null or undefined
            assertParamExists('orderApiV1ManagerVerifyCreate', 'orderUuid', orderUuid)
            // verify required parameter 'verifyOrder' is not null or undefined
            assertParamExists('orderApiV1ManagerVerifyCreate', 'verifyOrder', verifyOrder)
            const localVarPath = `/order/api/v1/manager/{order_uuid}/verify/`
                .replace(`{${"order_uuid"}}`, encodeURIComponent(String(orderUuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication MerchantAPIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(verifyOrder, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  موجودی کیف پول فروشنده  ## توضیحات  این endpoint موجودی کیف پول فروشنده را برمی‌گرداند. کیف پول برای پرداخت هزینه ارسال دیجی‌اکسپرس استفاده می‌شود. هنگام ثبت مرسوله دیجی‌اکسپرس، هزینه ارسال به‌صورت خودکار از کیف پول کسر می‌شود.  نیاز به **API_KEY** فروشنده دارد.  </div> 
         * @summary دریافت موجودی کیف پول
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        walletsApiV1WalletBalanceRetrieve: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/wallets/api/v1/wallet-balance/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication MerchantAPIKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  بررسی وضعیت احراز هویت فروشنده  ## توضیحات  این endpoint برای بررسی اعتبار **API_KEY** فروشنده استفاده می‌شود. اگر کلید معتبر باشد، پاسخ `is_authenticated: true` برمی‌گردد. از این endpoint برای تأیید صحت کلید API قبل از شروع عملیات استفاده کنید.  نیاز به **API_KEY** فروشنده دارد (فقط Header لازم است، بدنه درخواست ندارد).  </div> 
         * @summary وضعیت لاگین بودن
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async merchantApiV1AuthStatusRetrieve(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthStatusResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.merchantApiV1AuthStatusRetrieve(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.merchantApiV1AuthStatusRetrieve']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  ساخت سفارش جدید در سیستم BWDK  ## توضیحات  این endpoint برای ایجاد یک سفارش جدید در سیستم خرید با دیجی‌کالا استفاده می‌شود. در این درخواست باید اطلاعات سفارش، اقلام سبد خرید، و آدرس callback شامل شود.  برای شروع ارتباط با سرویس‌های **خرید با دیجی‌کالا** شما باید دارای **API_KEY** باشید که این مورد از سمت تیم دیجی‌فای در اختیار شما قرار خواهد گرفت.  ### روند کاری  **مرحله ۱: درخواست ساخت سفارش**  کاربر پس از انتخاب کالاهای خود در سبد خرید، بر روی دکمه **خرید با دیجی‌کالا** کلیک می‌کند و بک‌اند مرچنت درخواستی برای ساخت سفارش BWDK دریافت می‌کند. در این مرحله اولین درخواست خود را به بک‌اند BWDK ارسال می‌نمایید:  BWDK یک سفارش جدید برای مرچنت با وضعیت **INITIAL** ایجاد می‌کند و **order_uuid** را جنریت می‌کند. آدرس **order_start_url** نقطه شروع مسیر تکمیل سفارش است (انتخاب آدرس، شیپینگ، پکینگ، پرداخت و غیره). <br> </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API     participant C as مشتری     participant PG as درگاه پرداخت      M->>API: POST /api/v1/orders/create     Note over M,API: شناسه سفارش, کالاها, مبلغ, callback_url     API-->>M: {لینک شروع سفارش, شناسه سفارش}      M->>C: تغییر مسیر به لینک شروع      C->>API: تکمیل درخواست خرید توسط مشتری     API->>PG: شروع فرآیند پرداخت     PG-->>C: نتیجه پرداخت     PG->>API: تأیید پرداخت     API-->>C: تغییر مسیر به callback_url      M->>API: POST /api/v1/orders/manager/{uuid}/verify     Note over M,API: {شناسه منحصربفرد فروشنده}     API-->>M: سفارش تأیید شد و آماده ارسال است ```  </div> 
         * @summary ساخت سفارش
         * @param {OrderCreate} orderCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderApiV1CreateOrderCreate(orderCreate: OrderCreate, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrderCreateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderApiV1CreateOrderCreate(orderCreate, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.orderApiV1CreateOrderCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  لغو مرسوله دیجی‌اکسپرس  ## توضیحات  این endpoint برای لغو یک مرسوله ثبت‌شده در سرویس دیجی‌اکسپرس استفاده می‌شود. پس از لغو موفق، مرسوله از صف ارسال خارج می‌شود.  نیاز به **API_KEY** فروشنده دارد.  ## شرایط لغو  * سفارش باید دارای روش ارسال **DigiExpress** باشد * مرسوله باید در وضعیت **در انتظار تحویل به پیک** (Request for Pickup) باشد  </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API     participant DX as دیجی‌اکسپرس      M->>API: POST /order/api/v1/manager/{order_uuid}/cancel-shipment/     Note over M,API: Header: X-API-KEY (بدون بدنه)      alt روش ارسال DigiExpress نیست         API-->>M: 400 خطا         Note over API,M: {error: \"Selected shipping method is not DigiExpress\"}     else مرسوله قابل لغو نیست         API-->>M: 400 خطا         Note over API,M: {error: \"...\"}     else لغو موفق         API->>DX: لغو مرسوله         DX-->>API: تأیید لغو         API-->>M: 200 موفق         Note over API,M: {message, order_uuid, status, status_display}     end ``` 
         * @summary لغو ارسال سفارش
         * @param {string} orderUuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderApiV1ManagerCancelShipmentCreate(orderUuid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MerchantOrderCancelShipmentResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderApiV1ManagerCancelShipmentCreate(orderUuid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.orderApiV1ManagerCancelShipmentCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  تغییر روش ارسال سفارش  ## توضیحات  این endpoint به فروشنده اجازه می‌دهد روش ارسال یک سفارش را تغییر دهد. این عملیات معمولاً زمانی استفاده می‌شود که فروشنده بخواهد از DigiExpress به روش ارسال پیش‌فرض (یا بالعکس) تغییر دهد.  نیاز به **API_KEY** فروشنده دارد.  ## پارامترهای ورودی  * **updated_shipping**: شناسه روش ارسال جدید * **preparation_time** (اختیاری): زمان آماده‌سازی (روز) برای DigiExpress  </div> 
         * @summary تغییر روش ارسال
         * @param {string} orderUuid 
         * @param {OrderDetail} orderDetail 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderApiV1ManagerChangeShippingMethodUpdate(orderUuid: string, orderDetail: OrderDetail, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrderDetail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderApiV1ManagerChangeShippingMethodUpdate(orderUuid, orderDetail, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.orderApiV1ManagerChangeShippingMethodUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  لیست سفارشات فروشنده  ## توضیحات  این endpoint لیست تمام سفارشات مرتبط با فروشنده را با امکان فیلتر، جستجو و مرتب‌سازی برمی‌گرداند. نتایج به صورت صفحه‌بندی‌شده (Cursor Pagination) ارسال می‌شوند و به ترتیب جدیدترین سفارش اول مرتب می‌شوند.  نیاز به **API_KEY** فروشنده دارد.  ## پارامترهای فیلتر  * **status**: وضعیت سفارش (INITIAL, PENDING, PAID_BY_USER, VERIFIED_BY_MERCHANT, ...) * **created_at__gte / created_at__lte**: فیلتر بر اساس تاریخ ایجاد * **search**: جستجو در شماره تلفن مشتری، نام، کد مرجع، شناسه سفارش مرچنت * **ordering**: مرتب‌سازی بر اساس created_at, final_amount, status, merchant_order_id  </div> 
         * @summary لیست سفارشات
         * @param {string} [cities] 
         * @param {string} [createdAt] 
         * @param {string} [cursor] مقدار نشانگر صفحه‌بندی.
         * @param {string} [orderIds] 
         * @param {string} [ordering] کدام فیلد باید هنگام مرتب‌سازی نتایج استفاده شود.
         * @param {string} [paymentTypes] 
         * @param {string} [provinces] 
         * @param {string} [referenceCode] 
         * @param {string} [search] یک عبارت جستجو.
         * @param {string} [shippingTypes] 
         * @param {OrderApiV1ManagerListStatusEnum} [status] * &#x60;1&#x60; - اولیه * &#x60;2&#x60; - شروع در * &#x60;3&#x60; - در انتظار * &#x60;4&#x60; - در انتظار درگاه * &#x60;5&#x60; - منقضی شده * &#x60;6&#x60; - لغو شده * &#x60;7&#x60; - ممنوع شده توسط ما * &#x60;8&#x60; - ناموفق در پرداخت * &#x60;9&#x60; - تأیید شده توسط فروشنده * &#x60;10&#x60; - ناموفق در تأیید توسط فروشنده * &#x60;11&#x60; - فروشگاه * &#x60;12&#x60; - لغو شده توسط فروشنده * &#x60;13&#x60; - درخواست بازگرداندن وجه به مشتری به دلیل درخواست مشتری * &#x60;14&#x60; - درخواست بازگرداندن وجه به فروشنده پس از ناموفقی در تأیید توسط فروشنده * &#x60;15&#x60; - درخواست بازگرداندن وجه به مشتری پس از ناموفقی توسط فروشنده * &#x60;16&#x60; - بازگردانده شده به فروشنده پس از لغو توسط فروشنده * &#x60;17&#x60; - بازگرداندن وجه تکمیل شد * &#x60;18&#x60; - زمان مجاز برای منقضی کردن گذشته است * &#x60;19&#x60; - تحویل نشده * &#x60;20&#x60; - مرسوله
         * @param {string} [statuses] 
         * @param {boolean} [todayPickup] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderApiV1ManagerList(cities?: string, createdAt?: string, cursor?: string, orderIds?: string, ordering?: string, paymentTypes?: string, provinces?: string, referenceCode?: string, search?: string, shippingTypes?: string, status?: OrderApiV1ManagerListStatusEnum, statuses?: string, todayPickup?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedOrderDetailList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderApiV1ManagerList(cities, createdAt, cursor, orderIds, ordering, paymentTypes, provinces, referenceCode, search, shippingTypes, status, statuses, todayPickup, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.orderApiV1ManagerList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * لیست تمامی سفارشاتی که توسط کاربر پرداخت شده اند ولی توسط فروشنده تایید نشده اند. 
         * @summary سفارش پرداخت‌شده و تایید‌نشده
         * @param {string} [cities] 
         * @param {string} [createdAt] 
         * @param {string} [cursor] مقدار نشانگر صفحه‌بندی.
         * @param {string} [orderIds] 
         * @param {string} [ordering] کدام فیلد باید هنگام مرتب‌سازی نتایج استفاده شود.
         * @param {string} [paymentTypes] 
         * @param {string} [provinces] 
         * @param {string} [referenceCode] 
         * @param {string} [search] یک عبارت جستجو.
         * @param {string} [shippingTypes] 
         * @param {OrderApiV1ManagerPaidListStatusEnum} [status] * &#x60;1&#x60; - اولیه * &#x60;2&#x60; - شروع در * &#x60;3&#x60; - در انتظار * &#x60;4&#x60; - در انتظار درگاه * &#x60;5&#x60; - منقضی شده * &#x60;6&#x60; - لغو شده * &#x60;7&#x60; - ممنوع شده توسط ما * &#x60;8&#x60; - ناموفق در پرداخت * &#x60;9&#x60; - تأیید شده توسط فروشنده * &#x60;10&#x60; - ناموفق در تأیید توسط فروشنده * &#x60;11&#x60; - فروشگاه * &#x60;12&#x60; - لغو شده توسط فروشنده * &#x60;13&#x60; - درخواست بازگرداندن وجه به مشتری به دلیل درخواست مشتری * &#x60;14&#x60; - درخواست بازگرداندن وجه به فروشنده پس از ناموفقی در تأیید توسط فروشنده * &#x60;15&#x60; - درخواست بازگرداندن وجه به مشتری پس از ناموفقی توسط فروشنده * &#x60;16&#x60; - بازگردانده شده به فروشنده پس از لغو توسط فروشنده * &#x60;17&#x60; - بازگرداندن وجه تکمیل شد * &#x60;18&#x60; - زمان مجاز برای منقضی کردن گذشته است * &#x60;19&#x60; - تحویل نشده * &#x60;20&#x60; - مرسوله
         * @param {string} [statuses] 
         * @param {boolean} [todayPickup] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderApiV1ManagerPaidList(cities?: string, createdAt?: string, cursor?: string, orderIds?: string, ordering?: string, paymentTypes?: string, provinces?: string, referenceCode?: string, search?: string, shippingTypes?: string, status?: OrderApiV1ManagerPaidListStatusEnum, statuses?: string, todayPickup?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedMerchantPaidOrderListList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderApiV1ManagerPaidList(cities, createdAt, cursor, orderIds, ordering, paymentTypes, provinces, referenceCode, search, shippingTypes, status, statuses, todayPickup, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.orderApiV1ManagerPaidList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\"> بازگشت و لغو سفارش  ## توضیحات  این endpoint برای بازگشت یا لغو سفارشی استفاده می‌شود که قبلاً پرداخت شده یا تایید شده است. در این مرحله مبلغ سفارش به کاربر بازگشت داده می‌شود و وضعیت سفارش به **REFUNDED** تغییر می‌یابد.   ## شرایط بازگشت  سفارش باید در یکی از وضعیت‌های زیر باشد تا بازگشت امکان‌پذیر باشد: * **PAID_BY_USER**: سفارش پرداخت شده است اما هنوز تایید نشده * **VERIFIED_BY_MERCHANT**: سفارش تایید شده است  سفارش نباید قبلاً بازگشت داده شده باشد.  **پاسخ خطا** - اگر سفارش در وضعیت مناسب نباشد یا قبلاً بازگشت داده شده باشد </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API      M->>API: POST /api/v1/orders/manager/{uuid}/refund     Note over M,API: {reason: \"درخواست مشتری\"}      alt سفارش قابل بازگشت نیست         API-->>M: 500 خطا         Note over API,M: {error: \"شروع بازگشت ناموفق بود.<br/>لطفاً دوباره تلاش کنید.\"}     else سفارش معتبر است         API-->>M: 200 موفق         Note over API,M: {message: \"درخواست بازگشت با<br/>موفقیت شروع شد\",<br/>order_uuid, status: 13,<br/>status_display,<br/>refund_reason}          M->>API: GET /api/v1/orders/manager/{uuid}         Note over M,API: بررسی وضعیت سفارش<br/>(endpoint جداگانه /refund/status وجود ندارد)          alt status: 17 (بازگشت تکمیل شد)             API-->>M: 200 موفق             Note over API,M: {order_uuid, status: 17,<br/>status_display: \"بازگشت تکمیل شد\",<br/>metadata.refund_tracking_code,<br/>metadata.refund_completed_at}          else status: 13 (در حال پردازش)             API-->>M: 200 موفق             Note over API,M: {order_uuid, status: 13,<br/>status_display: \"درخواست بازگشت به مشتری<br/>به دلیل درخواست<br/>مشتری\",<br/>metadata.refund_reason}          else status: قبلی (بازگشت ناموفق)             API-->>M: 200 موفق             Note over API,M: {order_uuid, status: (قبلی),<br/>metadata.refund_error,<br/>metadata.refund_failed_at}         end     end ``` 
         * @summary بازگشت سفارش
         * @param {string} orderUuid 
         * @param {RefundOrder} [refundOrder] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderApiV1ManagerRefundCreate(orderUuid: string, refundOrder?: RefundOrder, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MerchantOrderRefundResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderApiV1ManagerRefundCreate(orderUuid, refundOrder, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.orderApiV1ManagerRefundCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  # مدیریت سفارشات  ## توضیحات  این endpoint برای مدیریت و مشاهده سفارشات فروشنده استفاده می‌شود.  </div> 
         * @summary دریافت سفارش
         * @param {string} orderUuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderApiV1ManagerRetrieve(orderUuid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrderDetail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderApiV1ManagerRetrieve(orderUuid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.orderApiV1ManagerRetrieve']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  احیای مرسوله دیجی‌اکسپرس  ## توضیحات  این endpoint برای احیای (reactivate) یک مرسوله دیجی‌اکسپرس که قبلاً لغو شده یا در وضعیت غیرفعال است استفاده می‌شود. با ارسال `preparation_time` (زمان آماده‌سازی بر حسب روز)، زمان جدید آماده بودن بار تنظیم می‌شود.  نیاز به **API_KEY** فروشنده دارد.  ## پارامترهای ورودی  * **preparation_time** (اختیاری، پیش‌فرض: ۲): تعداد روز تا آماده‌شدن بار برای تحویل به پیک  ## شرایط  * سفارش باید دارای روش ارسال **DigiExpress** باشد * مرسوله باید در وضعیت قابل احیا باشد  </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API     participant DX as دیجی‌اکسپرس      M->>API: POST /order/api/v1/manager/{order_uuid}/revive-shipment/     Note over M,API: Header: X-API-KEY<br/>{preparation_time: 2}      alt روش ارسال DigiExpress نیست         API-->>M: 400 خطا         Note over API,M: {error: \"Selected shipping method is not DigiExpress\"}     else احیا موفق         API->>DX: احیای مرسوله با زمان جدید         DX-->>API: تأیید احیا         API-->>M: 200 موفق         Note over API,M: {message, order_uuid, status, status_display}     end ``` 
         * @summary احیای ارسال سفارش
         * @param {string} orderUuid 
         * @param {ReviveShipment} [reviveShipment] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderApiV1ManagerReviveShipmentCreate(orderUuid: string, reviveShipment?: ReviveShipment, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MerchantOrderReviveShipmentResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderApiV1ManagerReviveShipmentCreate(orderUuid, reviveShipment, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.orderApiV1ManagerReviveShipmentCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  بروزرسانی وضعیت سفارش  ## توضیحات  این endpoint به فروشنده امکان می‌دهد وضعیت یک سفارش را به‌صورت مستقیم تغییر دهد. این endpoint برای مواردی مانند علامت‌گذاری سفارش به‌عنوان «ارسال شده» یا «تحویل داده شده» توسط فروشنده استفاده می‌شود.  نیاز به **API_KEY** فروشنده دارد.  ## وضعیت‌های مجاز  * **DELIVERED**: تحویل شد * **DISPATCHED**: ارسال شد * سایر وضعیت‌های تعریف‌شده در سیستم  </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API      M->>API: PUT /order/api/v1/manager/{order_uuid}/update-status/     Note over M,API: Header: X-API-KEY<br/>{status: \"DELIVERED\"}      alt وضعیت معتبر است         API-->>M: 200 موفق         Note over API,M: اطلاعات کامل سفارش با وضعیت جدید     else وضعیت نامعتبر است         API-->>M: 400 خطا         Note over API,M: {error: \"invalid status\"}     end ``` 
         * @summary به‌روزرسانی وضعیت سفارش
         * @param {string} orderUuid 
         * @param {UpdateOrderStatus} updateOrderStatus 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderApiV1ManagerUpdateStatusUpdate(orderUuid: string, updateOrderStatus: UpdateOrderStatus, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrderDetail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderApiV1ManagerUpdateStatusUpdate(orderUuid, updateOrderStatus, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.orderApiV1ManagerUpdateStatusUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  تایید سفارش پس از پرداخت  ## توضیحات  پس از اتمام فرایند پرداخت توسط کاربر، مرچنت باید سفارش را تایید کند. این endpoint برای تایید و نهایی کردن سفارش پس از پرداخت موفق توسط مشتری استفاده می‌شود. در این مرحله مرچنت سفارش را تایید می‌کند و وضعیت سفارش به **VERIFIED_BY_MERCHANT** تغییر می‌یابد.  ## روند کاری  **مرحله ۲: بازگشت کاربر و دریافت نتیجه**  پس از تکمیل فرایند پرداخت (موفق یا ناموفق)، کاربر به آدرس callback_url که هنگام ساخت سفارش ارسال کرده بودید بازگردانده می‌شود. در این درخواست وضعیت سفارش به صورت query parameters ارسال می‌شود:   **Query Parameters:** * **success**: متغیر منطقی نشان‌دهنده موفق یا ناموفق بودن سفارش * **status**: وضعیت سفارش (PAID، FAILED، وغیره) * **phone_number**: شماره تلفن مشتری * **order_uuid**: شناسه یکتای سفارش * **merchant_order_id**: شناسه سفارش در سیستم مرچنت  **مرحله ۳: تایید سفارش در بک‌اند**  سپس شما باید این endpoint را فراخوانی کنید تا سفارش را تایید کنید و اطمینان حاصل کنید که سفارش موفقیت‌آمیز ثبت شده است: </div> 
         * @summary تایید سفارش
         * @param {string} orderUuid 
         * @param {VerifyOrder} verifyOrder 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderApiV1ManagerVerifyCreate(orderUuid: string, verifyOrder: VerifyOrder, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrderDetail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderApiV1ManagerVerifyCreate(orderUuid, verifyOrder, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.orderApiV1ManagerVerifyCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  موجودی کیف پول فروشنده  ## توضیحات  این endpoint موجودی کیف پول فروشنده را برمی‌گرداند. کیف پول برای پرداخت هزینه ارسال دیجی‌اکسپرس استفاده می‌شود. هنگام ثبت مرسوله دیجی‌اکسپرس، هزینه ارسال به‌صورت خودکار از کیف پول کسر می‌شود.  نیاز به **API_KEY** فروشنده دارد.  </div> 
         * @summary دریافت موجودی کیف پول
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async walletsApiV1WalletBalanceRetrieve(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WalletBalance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.walletsApiV1WalletBalanceRetrieve(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.walletsApiV1WalletBalanceRetrieve']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DefaultApi - factory interface
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  بررسی وضعیت احراز هویت فروشنده  ## توضیحات  این endpoint برای بررسی اعتبار **API_KEY** فروشنده استفاده می‌شود. اگر کلید معتبر باشد، پاسخ `is_authenticated: true` برمی‌گردد. از این endpoint برای تأیید صحت کلید API قبل از شروع عملیات استفاده کنید.  نیاز به **API_KEY** فروشنده دارد (فقط Header لازم است، بدنه درخواست ندارد).  </div> 
         * @summary وضعیت لاگین بودن
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        merchantApiV1AuthStatusRetrieve(options?: RawAxiosRequestConfig): AxiosPromise<AuthStatusResponse> {
            return localVarFp.merchantApiV1AuthStatusRetrieve(options).then((request) => request(axios, basePath));
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  ساخت سفارش جدید در سیستم BWDK  ## توضیحات  این endpoint برای ایجاد یک سفارش جدید در سیستم خرید با دیجی‌کالا استفاده می‌شود. در این درخواست باید اطلاعات سفارش، اقلام سبد خرید، و آدرس callback شامل شود.  برای شروع ارتباط با سرویس‌های **خرید با دیجی‌کالا** شما باید دارای **API_KEY** باشید که این مورد از سمت تیم دیجی‌فای در اختیار شما قرار خواهد گرفت.  ### روند کاری  **مرحله ۱: درخواست ساخت سفارش**  کاربر پس از انتخاب کالاهای خود در سبد خرید، بر روی دکمه **خرید با دیجی‌کالا** کلیک می‌کند و بک‌اند مرچنت درخواستی برای ساخت سفارش BWDK دریافت می‌کند. در این مرحله اولین درخواست خود را به بک‌اند BWDK ارسال می‌نمایید:  BWDK یک سفارش جدید برای مرچنت با وضعیت **INITIAL** ایجاد می‌کند و **order_uuid** را جنریت می‌کند. آدرس **order_start_url** نقطه شروع مسیر تکمیل سفارش است (انتخاب آدرس، شیپینگ، پکینگ، پرداخت و غیره). <br> </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API     participant C as مشتری     participant PG as درگاه پرداخت      M->>API: POST /api/v1/orders/create     Note over M,API: شناسه سفارش, کالاها, مبلغ, callback_url     API-->>M: {لینک شروع سفارش, شناسه سفارش}      M->>C: تغییر مسیر به لینک شروع      C->>API: تکمیل درخواست خرید توسط مشتری     API->>PG: شروع فرآیند پرداخت     PG-->>C: نتیجه پرداخت     PG->>API: تأیید پرداخت     API-->>C: تغییر مسیر به callback_url      M->>API: POST /api/v1/orders/manager/{uuid}/verify     Note over M,API: {شناسه منحصربفرد فروشنده}     API-->>M: سفارش تأیید شد و آماده ارسال است ```  </div> 
         * @summary ساخت سفارش
         * @param {OrderCreate} orderCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1CreateOrderCreate(orderCreate: OrderCreate, options?: RawAxiosRequestConfig): AxiosPromise<OrderCreateResponse> {
            return localVarFp.orderApiV1CreateOrderCreate(orderCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  لغو مرسوله دیجی‌اکسپرس  ## توضیحات  این endpoint برای لغو یک مرسوله ثبت‌شده در سرویس دیجی‌اکسپرس استفاده می‌شود. پس از لغو موفق، مرسوله از صف ارسال خارج می‌شود.  نیاز به **API_KEY** فروشنده دارد.  ## شرایط لغو  * سفارش باید دارای روش ارسال **DigiExpress** باشد * مرسوله باید در وضعیت **در انتظار تحویل به پیک** (Request for Pickup) باشد  </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API     participant DX as دیجی‌اکسپرس      M->>API: POST /order/api/v1/manager/{order_uuid}/cancel-shipment/     Note over M,API: Header: X-API-KEY (بدون بدنه)      alt روش ارسال DigiExpress نیست         API-->>M: 400 خطا         Note over API,M: {error: \"Selected shipping method is not DigiExpress\"}     else مرسوله قابل لغو نیست         API-->>M: 400 خطا         Note over API,M: {error: \"...\"}     else لغو موفق         API->>DX: لغو مرسوله         DX-->>API: تأیید لغو         API-->>M: 200 موفق         Note over API,M: {message, order_uuid, status, status_display}     end ``` 
         * @summary لغو ارسال سفارش
         * @param {string} orderUuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerCancelShipmentCreate(orderUuid: string, options?: RawAxiosRequestConfig): AxiosPromise<MerchantOrderCancelShipmentResponse> {
            return localVarFp.orderApiV1ManagerCancelShipmentCreate(orderUuid, options).then((request) => request(axios, basePath));
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  تغییر روش ارسال سفارش  ## توضیحات  این endpoint به فروشنده اجازه می‌دهد روش ارسال یک سفارش را تغییر دهد. این عملیات معمولاً زمانی استفاده می‌شود که فروشنده بخواهد از DigiExpress به روش ارسال پیش‌فرض (یا بالعکس) تغییر دهد.  نیاز به **API_KEY** فروشنده دارد.  ## پارامترهای ورودی  * **updated_shipping**: شناسه روش ارسال جدید * **preparation_time** (اختیاری): زمان آماده‌سازی (روز) برای DigiExpress  </div> 
         * @summary تغییر روش ارسال
         * @param {string} orderUuid 
         * @param {OrderDetail} orderDetail 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerChangeShippingMethodUpdate(orderUuid: string, orderDetail: OrderDetail, options?: RawAxiosRequestConfig): AxiosPromise<OrderDetail> {
            return localVarFp.orderApiV1ManagerChangeShippingMethodUpdate(orderUuid, orderDetail, options).then((request) => request(axios, basePath));
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  لیست سفارشات فروشنده  ## توضیحات  این endpoint لیست تمام سفارشات مرتبط با فروشنده را با امکان فیلتر، جستجو و مرتب‌سازی برمی‌گرداند. نتایج به صورت صفحه‌بندی‌شده (Cursor Pagination) ارسال می‌شوند و به ترتیب جدیدترین سفارش اول مرتب می‌شوند.  نیاز به **API_KEY** فروشنده دارد.  ## پارامترهای فیلتر  * **status**: وضعیت سفارش (INITIAL, PENDING, PAID_BY_USER, VERIFIED_BY_MERCHANT, ...) * **created_at__gte / created_at__lte**: فیلتر بر اساس تاریخ ایجاد * **search**: جستجو در شماره تلفن مشتری، نام، کد مرجع، شناسه سفارش مرچنت * **ordering**: مرتب‌سازی بر اساس created_at, final_amount, status, merchant_order_id  </div> 
         * @summary لیست سفارشات
         * @param {string} [cities] 
         * @param {string} [createdAt] 
         * @param {string} [cursor] مقدار نشانگر صفحه‌بندی.
         * @param {string} [orderIds] 
         * @param {string} [ordering] کدام فیلد باید هنگام مرتب‌سازی نتایج استفاده شود.
         * @param {string} [paymentTypes] 
         * @param {string} [provinces] 
         * @param {string} [referenceCode] 
         * @param {string} [search] یک عبارت جستجو.
         * @param {string} [shippingTypes] 
         * @param {OrderApiV1ManagerListStatusEnum} [status] * &#x60;1&#x60; - اولیه * &#x60;2&#x60; - شروع در * &#x60;3&#x60; - در انتظار * &#x60;4&#x60; - در انتظار درگاه * &#x60;5&#x60; - منقضی شده * &#x60;6&#x60; - لغو شده * &#x60;7&#x60; - ممنوع شده توسط ما * &#x60;8&#x60; - ناموفق در پرداخت * &#x60;9&#x60; - تأیید شده توسط فروشنده * &#x60;10&#x60; - ناموفق در تأیید توسط فروشنده * &#x60;11&#x60; - فروشگاه * &#x60;12&#x60; - لغو شده توسط فروشنده * &#x60;13&#x60; - درخواست بازگرداندن وجه به مشتری به دلیل درخواست مشتری * &#x60;14&#x60; - درخواست بازگرداندن وجه به فروشنده پس از ناموفقی در تأیید توسط فروشنده * &#x60;15&#x60; - درخواست بازگرداندن وجه به مشتری پس از ناموفقی توسط فروشنده * &#x60;16&#x60; - بازگردانده شده به فروشنده پس از لغو توسط فروشنده * &#x60;17&#x60; - بازگرداندن وجه تکمیل شد * &#x60;18&#x60; - زمان مجاز برای منقضی کردن گذشته است * &#x60;19&#x60; - تحویل نشده * &#x60;20&#x60; - مرسوله
         * @param {string} [statuses] 
         * @param {boolean} [todayPickup] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerList(cities?: string, createdAt?: string, cursor?: string, orderIds?: string, ordering?: string, paymentTypes?: string, provinces?: string, referenceCode?: string, search?: string, shippingTypes?: string, status?: OrderApiV1ManagerListStatusEnum, statuses?: string, todayPickup?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<PaginatedOrderDetailList> {
            return localVarFp.orderApiV1ManagerList(cities, createdAt, cursor, orderIds, ordering, paymentTypes, provinces, referenceCode, search, shippingTypes, status, statuses, todayPickup, options).then((request) => request(axios, basePath));
        },
        /**
         * لیست تمامی سفارشاتی که توسط کاربر پرداخت شده اند ولی توسط فروشنده تایید نشده اند. 
         * @summary سفارش پرداخت‌شده و تایید‌نشده
         * @param {string} [cities] 
         * @param {string} [createdAt] 
         * @param {string} [cursor] مقدار نشانگر صفحه‌بندی.
         * @param {string} [orderIds] 
         * @param {string} [ordering] کدام فیلد باید هنگام مرتب‌سازی نتایج استفاده شود.
         * @param {string} [paymentTypes] 
         * @param {string} [provinces] 
         * @param {string} [referenceCode] 
         * @param {string} [search] یک عبارت جستجو.
         * @param {string} [shippingTypes] 
         * @param {OrderApiV1ManagerPaidListStatusEnum} [status] * &#x60;1&#x60; - اولیه * &#x60;2&#x60; - شروع در * &#x60;3&#x60; - در انتظار * &#x60;4&#x60; - در انتظار درگاه * &#x60;5&#x60; - منقضی شده * &#x60;6&#x60; - لغو شده * &#x60;7&#x60; - ممنوع شده توسط ما * &#x60;8&#x60; - ناموفق در پرداخت * &#x60;9&#x60; - تأیید شده توسط فروشنده * &#x60;10&#x60; - ناموفق در تأیید توسط فروشنده * &#x60;11&#x60; - فروشگاه * &#x60;12&#x60; - لغو شده توسط فروشنده * &#x60;13&#x60; - درخواست بازگرداندن وجه به مشتری به دلیل درخواست مشتری * &#x60;14&#x60; - درخواست بازگرداندن وجه به فروشنده پس از ناموفقی در تأیید توسط فروشنده * &#x60;15&#x60; - درخواست بازگرداندن وجه به مشتری پس از ناموفقی توسط فروشنده * &#x60;16&#x60; - بازگردانده شده به فروشنده پس از لغو توسط فروشنده * &#x60;17&#x60; - بازگرداندن وجه تکمیل شد * &#x60;18&#x60; - زمان مجاز برای منقضی کردن گذشته است * &#x60;19&#x60; - تحویل نشده * &#x60;20&#x60; - مرسوله
         * @param {string} [statuses] 
         * @param {boolean} [todayPickup] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerPaidList(cities?: string, createdAt?: string, cursor?: string, orderIds?: string, ordering?: string, paymentTypes?: string, provinces?: string, referenceCode?: string, search?: string, shippingTypes?: string, status?: OrderApiV1ManagerPaidListStatusEnum, statuses?: string, todayPickup?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<PaginatedMerchantPaidOrderListList> {
            return localVarFp.orderApiV1ManagerPaidList(cities, createdAt, cursor, orderIds, ordering, paymentTypes, provinces, referenceCode, search, shippingTypes, status, statuses, todayPickup, options).then((request) => request(axios, basePath));
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\"> بازگشت و لغو سفارش  ## توضیحات  این endpoint برای بازگشت یا لغو سفارشی استفاده می‌شود که قبلاً پرداخت شده یا تایید شده است. در این مرحله مبلغ سفارش به کاربر بازگشت داده می‌شود و وضعیت سفارش به **REFUNDED** تغییر می‌یابد.   ## شرایط بازگشت  سفارش باید در یکی از وضعیت‌های زیر باشد تا بازگشت امکان‌پذیر باشد: * **PAID_BY_USER**: سفارش پرداخت شده است اما هنوز تایید نشده * **VERIFIED_BY_MERCHANT**: سفارش تایید شده است  سفارش نباید قبلاً بازگشت داده شده باشد.  **پاسخ خطا** - اگر سفارش در وضعیت مناسب نباشد یا قبلاً بازگشت داده شده باشد </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API      M->>API: POST /api/v1/orders/manager/{uuid}/refund     Note over M,API: {reason: \"درخواست مشتری\"}      alt سفارش قابل بازگشت نیست         API-->>M: 500 خطا         Note over API,M: {error: \"شروع بازگشت ناموفق بود.<br/>لطفاً دوباره تلاش کنید.\"}     else سفارش معتبر است         API-->>M: 200 موفق         Note over API,M: {message: \"درخواست بازگشت با<br/>موفقیت شروع شد\",<br/>order_uuid, status: 13,<br/>status_display,<br/>refund_reason}          M->>API: GET /api/v1/orders/manager/{uuid}         Note over M,API: بررسی وضعیت سفارش<br/>(endpoint جداگانه /refund/status وجود ندارد)          alt status: 17 (بازگشت تکمیل شد)             API-->>M: 200 موفق             Note over API,M: {order_uuid, status: 17,<br/>status_display: \"بازگشت تکمیل شد\",<br/>metadata.refund_tracking_code,<br/>metadata.refund_completed_at}          else status: 13 (در حال پردازش)             API-->>M: 200 موفق             Note over API,M: {order_uuid, status: 13,<br/>status_display: \"درخواست بازگشت به مشتری<br/>به دلیل درخواست<br/>مشتری\",<br/>metadata.refund_reason}          else status: قبلی (بازگشت ناموفق)             API-->>M: 200 موفق             Note over API,M: {order_uuid, status: (قبلی),<br/>metadata.refund_error,<br/>metadata.refund_failed_at}         end     end ``` 
         * @summary بازگشت سفارش
         * @param {string} orderUuid 
         * @param {RefundOrder} [refundOrder] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerRefundCreate(orderUuid: string, refundOrder?: RefundOrder, options?: RawAxiosRequestConfig): AxiosPromise<MerchantOrderRefundResponse> {
            return localVarFp.orderApiV1ManagerRefundCreate(orderUuid, refundOrder, options).then((request) => request(axios, basePath));
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  # مدیریت سفارشات  ## توضیحات  این endpoint برای مدیریت و مشاهده سفارشات فروشنده استفاده می‌شود.  </div> 
         * @summary دریافت سفارش
         * @param {string} orderUuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerRetrieve(orderUuid: string, options?: RawAxiosRequestConfig): AxiosPromise<OrderDetail> {
            return localVarFp.orderApiV1ManagerRetrieve(orderUuid, options).then((request) => request(axios, basePath));
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  احیای مرسوله دیجی‌اکسپرس  ## توضیحات  این endpoint برای احیای (reactivate) یک مرسوله دیجی‌اکسپرس که قبلاً لغو شده یا در وضعیت غیرفعال است استفاده می‌شود. با ارسال `preparation_time` (زمان آماده‌سازی بر حسب روز)، زمان جدید آماده بودن بار تنظیم می‌شود.  نیاز به **API_KEY** فروشنده دارد.  ## پارامترهای ورودی  * **preparation_time** (اختیاری، پیش‌فرض: ۲): تعداد روز تا آماده‌شدن بار برای تحویل به پیک  ## شرایط  * سفارش باید دارای روش ارسال **DigiExpress** باشد * مرسوله باید در وضعیت قابل احیا باشد  </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API     participant DX as دیجی‌اکسپرس      M->>API: POST /order/api/v1/manager/{order_uuid}/revive-shipment/     Note over M,API: Header: X-API-KEY<br/>{preparation_time: 2}      alt روش ارسال DigiExpress نیست         API-->>M: 400 خطا         Note over API,M: {error: \"Selected shipping method is not DigiExpress\"}     else احیا موفق         API->>DX: احیای مرسوله با زمان جدید         DX-->>API: تأیید احیا         API-->>M: 200 موفق         Note over API,M: {message, order_uuid, status, status_display}     end ``` 
         * @summary احیای ارسال سفارش
         * @param {string} orderUuid 
         * @param {ReviveShipment} [reviveShipment] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerReviveShipmentCreate(orderUuid: string, reviveShipment?: ReviveShipment, options?: RawAxiosRequestConfig): AxiosPromise<MerchantOrderReviveShipmentResponse> {
            return localVarFp.orderApiV1ManagerReviveShipmentCreate(orderUuid, reviveShipment, options).then((request) => request(axios, basePath));
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  بروزرسانی وضعیت سفارش  ## توضیحات  این endpoint به فروشنده امکان می‌دهد وضعیت یک سفارش را به‌صورت مستقیم تغییر دهد. این endpoint برای مواردی مانند علامت‌گذاری سفارش به‌عنوان «ارسال شده» یا «تحویل داده شده» توسط فروشنده استفاده می‌شود.  نیاز به **API_KEY** فروشنده دارد.  ## وضعیت‌های مجاز  * **DELIVERED**: تحویل شد * **DISPATCHED**: ارسال شد * سایر وضعیت‌های تعریف‌شده در سیستم  </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API      M->>API: PUT /order/api/v1/manager/{order_uuid}/update-status/     Note over M,API: Header: X-API-KEY<br/>{status: \"DELIVERED\"}      alt وضعیت معتبر است         API-->>M: 200 موفق         Note over API,M: اطلاعات کامل سفارش با وضعیت جدید     else وضعیت نامعتبر است         API-->>M: 400 خطا         Note over API,M: {error: \"invalid status\"}     end ``` 
         * @summary به‌روزرسانی وضعیت سفارش
         * @param {string} orderUuid 
         * @param {UpdateOrderStatus} updateOrderStatus 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerUpdateStatusUpdate(orderUuid: string, updateOrderStatus: UpdateOrderStatus, options?: RawAxiosRequestConfig): AxiosPromise<OrderDetail> {
            return localVarFp.orderApiV1ManagerUpdateStatusUpdate(orderUuid, updateOrderStatus, options).then((request) => request(axios, basePath));
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  تایید سفارش پس از پرداخت  ## توضیحات  پس از اتمام فرایند پرداخت توسط کاربر، مرچنت باید سفارش را تایید کند. این endpoint برای تایید و نهایی کردن سفارش پس از پرداخت موفق توسط مشتری استفاده می‌شود. در این مرحله مرچنت سفارش را تایید می‌کند و وضعیت سفارش به **VERIFIED_BY_MERCHANT** تغییر می‌یابد.  ## روند کاری  **مرحله ۲: بازگشت کاربر و دریافت نتیجه**  پس از تکمیل فرایند پرداخت (موفق یا ناموفق)، کاربر به آدرس callback_url که هنگام ساخت سفارش ارسال کرده بودید بازگردانده می‌شود. در این درخواست وضعیت سفارش به صورت query parameters ارسال می‌شود:   **Query Parameters:** * **success**: متغیر منطقی نشان‌دهنده موفق یا ناموفق بودن سفارش * **status**: وضعیت سفارش (PAID، FAILED، وغیره) * **phone_number**: شماره تلفن مشتری * **order_uuid**: شناسه یکتای سفارش * **merchant_order_id**: شناسه سفارش در سیستم مرچنت  **مرحله ۳: تایید سفارش در بک‌اند**  سپس شما باید این endpoint را فراخوانی کنید تا سفارش را تایید کنید و اطمینان حاصل کنید که سفارش موفقیت‌آمیز ثبت شده است: </div> 
         * @summary تایید سفارش
         * @param {string} orderUuid 
         * @param {VerifyOrder} verifyOrder 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderApiV1ManagerVerifyCreate(orderUuid: string, verifyOrder: VerifyOrder, options?: RawAxiosRequestConfig): AxiosPromise<OrderDetail> {
            return localVarFp.orderApiV1ManagerVerifyCreate(orderUuid, verifyOrder, options).then((request) => request(axios, basePath));
        },
        /**
         * <div dir=\"rtl\" style=\"text-align: right;\">  موجودی کیف پول فروشنده  ## توضیحات  این endpoint موجودی کیف پول فروشنده را برمی‌گرداند. کیف پول برای پرداخت هزینه ارسال دیجی‌اکسپرس استفاده می‌شود. هنگام ثبت مرسوله دیجی‌اکسپرس، هزینه ارسال به‌صورت خودکار از کیف پول کسر می‌شود.  نیاز به **API_KEY** فروشنده دارد.  </div> 
         * @summary دریافت موجودی کیف پول
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        walletsApiV1WalletBalanceRetrieve(options?: RawAxiosRequestConfig): AxiosPromise<WalletBalance> {
            return localVarFp.walletsApiV1WalletBalanceRetrieve(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 */
export class DefaultApi extends BaseAPI {
    /**
     * <div dir=\"rtl\" style=\"text-align: right;\">  بررسی وضعیت احراز هویت فروشنده  ## توضیحات  این endpoint برای بررسی اعتبار **API_KEY** فروشنده استفاده می‌شود. اگر کلید معتبر باشد، پاسخ `is_authenticated: true` برمی‌گردد. از این endpoint برای تأیید صحت کلید API قبل از شروع عملیات استفاده کنید.  نیاز به **API_KEY** فروشنده دارد (فقط Header لازم است، بدنه درخواست ندارد).  </div> 
     * @summary وضعیت لاگین بودن
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public merchantApiV1AuthStatusRetrieve(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).merchantApiV1AuthStatusRetrieve(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * <div dir=\"rtl\" style=\"text-align: right;\">  ساخت سفارش جدید در سیستم BWDK  ## توضیحات  این endpoint برای ایجاد یک سفارش جدید در سیستم خرید با دیجی‌کالا استفاده می‌شود. در این درخواست باید اطلاعات سفارش، اقلام سبد خرید، و آدرس callback شامل شود.  برای شروع ارتباط با سرویس‌های **خرید با دیجی‌کالا** شما باید دارای **API_KEY** باشید که این مورد از سمت تیم دیجی‌فای در اختیار شما قرار خواهد گرفت.  ### روند کاری  **مرحله ۱: درخواست ساخت سفارش**  کاربر پس از انتخاب کالاهای خود در سبد خرید، بر روی دکمه **خرید با دیجی‌کالا** کلیک می‌کند و بک‌اند مرچنت درخواستی برای ساخت سفارش BWDK دریافت می‌کند. در این مرحله اولین درخواست خود را به بک‌اند BWDK ارسال می‌نمایید:  BWDK یک سفارش جدید برای مرچنت با وضعیت **INITIAL** ایجاد می‌کند و **order_uuid** را جنریت می‌کند. آدرس **order_start_url** نقطه شروع مسیر تکمیل سفارش است (انتخاب آدرس، شیپینگ، پکینگ، پرداخت و غیره). <br> </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API     participant C as مشتری     participant PG as درگاه پرداخت      M->>API: POST /api/v1/orders/create     Note over M,API: شناسه سفارش, کالاها, مبلغ, callback_url     API-->>M: {لینک شروع سفارش, شناسه سفارش}      M->>C: تغییر مسیر به لینک شروع      C->>API: تکمیل درخواست خرید توسط مشتری     API->>PG: شروع فرآیند پرداخت     PG-->>C: نتیجه پرداخت     PG->>API: تأیید پرداخت     API-->>C: تغییر مسیر به callback_url      M->>API: POST /api/v1/orders/manager/{uuid}/verify     Note over M,API: {شناسه منحصربفرد فروشنده}     API-->>M: سفارش تأیید شد و آماده ارسال است ```  </div> 
     * @summary ساخت سفارش
     * @param {OrderCreate} orderCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public orderApiV1CreateOrderCreate(orderCreate: OrderCreate, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).orderApiV1CreateOrderCreate(orderCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * <div dir=\"rtl\" style=\"text-align: right;\">  لغو مرسوله دیجی‌اکسپرس  ## توضیحات  این endpoint برای لغو یک مرسوله ثبت‌شده در سرویس دیجی‌اکسپرس استفاده می‌شود. پس از لغو موفق، مرسوله از صف ارسال خارج می‌شود.  نیاز به **API_KEY** فروشنده دارد.  ## شرایط لغو  * سفارش باید دارای روش ارسال **DigiExpress** باشد * مرسوله باید در وضعیت **در انتظار تحویل به پیک** (Request for Pickup) باشد  </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API     participant DX as دیجی‌اکسپرس      M->>API: POST /order/api/v1/manager/{order_uuid}/cancel-shipment/     Note over M,API: Header: X-API-KEY (بدون بدنه)      alt روش ارسال DigiExpress نیست         API-->>M: 400 خطا         Note over API,M: {error: \"Selected shipping method is not DigiExpress\"}     else مرسوله قابل لغو نیست         API-->>M: 400 خطا         Note over API,M: {error: \"...\"}     else لغو موفق         API->>DX: لغو مرسوله         DX-->>API: تأیید لغو         API-->>M: 200 موفق         Note over API,M: {message, order_uuid, status, status_display}     end ``` 
     * @summary لغو ارسال سفارش
     * @param {string} orderUuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public orderApiV1ManagerCancelShipmentCreate(orderUuid: string, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).orderApiV1ManagerCancelShipmentCreate(orderUuid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * <div dir=\"rtl\" style=\"text-align: right;\">  تغییر روش ارسال سفارش  ## توضیحات  این endpoint به فروشنده اجازه می‌دهد روش ارسال یک سفارش را تغییر دهد. این عملیات معمولاً زمانی استفاده می‌شود که فروشنده بخواهد از DigiExpress به روش ارسال پیش‌فرض (یا بالعکس) تغییر دهد.  نیاز به **API_KEY** فروشنده دارد.  ## پارامترهای ورودی  * **updated_shipping**: شناسه روش ارسال جدید * **preparation_time** (اختیاری): زمان آماده‌سازی (روز) برای DigiExpress  </div> 
     * @summary تغییر روش ارسال
     * @param {string} orderUuid 
     * @param {OrderDetail} orderDetail 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public orderApiV1ManagerChangeShippingMethodUpdate(orderUuid: string, orderDetail: OrderDetail, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).orderApiV1ManagerChangeShippingMethodUpdate(orderUuid, orderDetail, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * <div dir=\"rtl\" style=\"text-align: right;\">  لیست سفارشات فروشنده  ## توضیحات  این endpoint لیست تمام سفارشات مرتبط با فروشنده را با امکان فیلتر، جستجو و مرتب‌سازی برمی‌گرداند. نتایج به صورت صفحه‌بندی‌شده (Cursor Pagination) ارسال می‌شوند و به ترتیب جدیدترین سفارش اول مرتب می‌شوند.  نیاز به **API_KEY** فروشنده دارد.  ## پارامترهای فیلتر  * **status**: وضعیت سفارش (INITIAL, PENDING, PAID_BY_USER, VERIFIED_BY_MERCHANT, ...) * **created_at__gte / created_at__lte**: فیلتر بر اساس تاریخ ایجاد * **search**: جستجو در شماره تلفن مشتری، نام، کد مرجع، شناسه سفارش مرچنت * **ordering**: مرتب‌سازی بر اساس created_at, final_amount, status, merchant_order_id  </div> 
     * @summary لیست سفارشات
     * @param {string} [cities] 
     * @param {string} [createdAt] 
     * @param {string} [cursor] مقدار نشانگر صفحه‌بندی.
     * @param {string} [orderIds] 
     * @param {string} [ordering] کدام فیلد باید هنگام مرتب‌سازی نتایج استفاده شود.
     * @param {string} [paymentTypes] 
     * @param {string} [provinces] 
     * @param {string} [referenceCode] 
     * @param {string} [search] یک عبارت جستجو.
     * @param {string} [shippingTypes] 
     * @param {OrderApiV1ManagerListStatusEnum} [status] * &#x60;1&#x60; - اولیه * &#x60;2&#x60; - شروع در * &#x60;3&#x60; - در انتظار * &#x60;4&#x60; - در انتظار درگاه * &#x60;5&#x60; - منقضی شده * &#x60;6&#x60; - لغو شده * &#x60;7&#x60; - ممنوع شده توسط ما * &#x60;8&#x60; - ناموفق در پرداخت * &#x60;9&#x60; - تأیید شده توسط فروشنده * &#x60;10&#x60; - ناموفق در تأیید توسط فروشنده * &#x60;11&#x60; - فروشگاه * &#x60;12&#x60; - لغو شده توسط فروشنده * &#x60;13&#x60; - درخواست بازگرداندن وجه به مشتری به دلیل درخواست مشتری * &#x60;14&#x60; - درخواست بازگرداندن وجه به فروشنده پس از ناموفقی در تأیید توسط فروشنده * &#x60;15&#x60; - درخواست بازگرداندن وجه به مشتری پس از ناموفقی توسط فروشنده * &#x60;16&#x60; - بازگردانده شده به فروشنده پس از لغو توسط فروشنده * &#x60;17&#x60; - بازگرداندن وجه تکمیل شد * &#x60;18&#x60; - زمان مجاز برای منقضی کردن گذشته است * &#x60;19&#x60; - تحویل نشده * &#x60;20&#x60; - مرسوله
     * @param {string} [statuses] 
     * @param {boolean} [todayPickup] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public orderApiV1ManagerList(cities?: string, createdAt?: string, cursor?: string, orderIds?: string, ordering?: string, paymentTypes?: string, provinces?: string, referenceCode?: string, search?: string, shippingTypes?: string, status?: OrderApiV1ManagerListStatusEnum, statuses?: string, todayPickup?: boolean, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).orderApiV1ManagerList(cities, createdAt, cursor, orderIds, ordering, paymentTypes, provinces, referenceCode, search, shippingTypes, status, statuses, todayPickup, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * لیست تمامی سفارشاتی که توسط کاربر پرداخت شده اند ولی توسط فروشنده تایید نشده اند. 
     * @summary سفارش پرداخت‌شده و تایید‌نشده
     * @param {string} [cities] 
     * @param {string} [createdAt] 
     * @param {string} [cursor] مقدار نشانگر صفحه‌بندی.
     * @param {string} [orderIds] 
     * @param {string} [ordering] کدام فیلد باید هنگام مرتب‌سازی نتایج استفاده شود.
     * @param {string} [paymentTypes] 
     * @param {string} [provinces] 
     * @param {string} [referenceCode] 
     * @param {string} [search] یک عبارت جستجو.
     * @param {string} [shippingTypes] 
     * @param {OrderApiV1ManagerPaidListStatusEnum} [status] * &#x60;1&#x60; - اولیه * &#x60;2&#x60; - شروع در * &#x60;3&#x60; - در انتظار * &#x60;4&#x60; - در انتظار درگاه * &#x60;5&#x60; - منقضی شده * &#x60;6&#x60; - لغو شده * &#x60;7&#x60; - ممنوع شده توسط ما * &#x60;8&#x60; - ناموفق در پرداخت * &#x60;9&#x60; - تأیید شده توسط فروشنده * &#x60;10&#x60; - ناموفق در تأیید توسط فروشنده * &#x60;11&#x60; - فروشگاه * &#x60;12&#x60; - لغو شده توسط فروشنده * &#x60;13&#x60; - درخواست بازگرداندن وجه به مشتری به دلیل درخواست مشتری * &#x60;14&#x60; - درخواست بازگرداندن وجه به فروشنده پس از ناموفقی در تأیید توسط فروشنده * &#x60;15&#x60; - درخواست بازگرداندن وجه به مشتری پس از ناموفقی توسط فروشنده * &#x60;16&#x60; - بازگردانده شده به فروشنده پس از لغو توسط فروشنده * &#x60;17&#x60; - بازگرداندن وجه تکمیل شد * &#x60;18&#x60; - زمان مجاز برای منقضی کردن گذشته است * &#x60;19&#x60; - تحویل نشده * &#x60;20&#x60; - مرسوله
     * @param {string} [statuses] 
     * @param {boolean} [todayPickup] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public orderApiV1ManagerPaidList(cities?: string, createdAt?: string, cursor?: string, orderIds?: string, ordering?: string, paymentTypes?: string, provinces?: string, referenceCode?: string, search?: string, shippingTypes?: string, status?: OrderApiV1ManagerPaidListStatusEnum, statuses?: string, todayPickup?: boolean, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).orderApiV1ManagerPaidList(cities, createdAt, cursor, orderIds, ordering, paymentTypes, provinces, referenceCode, search, shippingTypes, status, statuses, todayPickup, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * <div dir=\"rtl\" style=\"text-align: right;\"> بازگشت و لغو سفارش  ## توضیحات  این endpoint برای بازگشت یا لغو سفارشی استفاده می‌شود که قبلاً پرداخت شده یا تایید شده است. در این مرحله مبلغ سفارش به کاربر بازگشت داده می‌شود و وضعیت سفارش به **REFUNDED** تغییر می‌یابد.   ## شرایط بازگشت  سفارش باید در یکی از وضعیت‌های زیر باشد تا بازگشت امکان‌پذیر باشد: * **PAID_BY_USER**: سفارش پرداخت شده است اما هنوز تایید نشده * **VERIFIED_BY_MERCHANT**: سفارش تایید شده است  سفارش نباید قبلاً بازگشت داده شده باشد.  **پاسخ خطا** - اگر سفارش در وضعیت مناسب نباشد یا قبلاً بازگشت داده شده باشد </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API      M->>API: POST /api/v1/orders/manager/{uuid}/refund     Note over M,API: {reason: \"درخواست مشتری\"}      alt سفارش قابل بازگشت نیست         API-->>M: 500 خطا         Note over API,M: {error: \"شروع بازگشت ناموفق بود.<br/>لطفاً دوباره تلاش کنید.\"}     else سفارش معتبر است         API-->>M: 200 موفق         Note over API,M: {message: \"درخواست بازگشت با<br/>موفقیت شروع شد\",<br/>order_uuid, status: 13,<br/>status_display,<br/>refund_reason}          M->>API: GET /api/v1/orders/manager/{uuid}         Note over M,API: بررسی وضعیت سفارش<br/>(endpoint جداگانه /refund/status وجود ندارد)          alt status: 17 (بازگشت تکمیل شد)             API-->>M: 200 موفق             Note over API,M: {order_uuid, status: 17,<br/>status_display: \"بازگشت تکمیل شد\",<br/>metadata.refund_tracking_code,<br/>metadata.refund_completed_at}          else status: 13 (در حال پردازش)             API-->>M: 200 موفق             Note over API,M: {order_uuid, status: 13,<br/>status_display: \"درخواست بازگشت به مشتری<br/>به دلیل درخواست<br/>مشتری\",<br/>metadata.refund_reason}          else status: قبلی (بازگشت ناموفق)             API-->>M: 200 موفق             Note over API,M: {order_uuid, status: (قبلی),<br/>metadata.refund_error,<br/>metadata.refund_failed_at}         end     end ``` 
     * @summary بازگشت سفارش
     * @param {string} orderUuid 
     * @param {RefundOrder} [refundOrder] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public orderApiV1ManagerRefundCreate(orderUuid: string, refundOrder?: RefundOrder, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).orderApiV1ManagerRefundCreate(orderUuid, refundOrder, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * <div dir=\"rtl\" style=\"text-align: right;\">  # مدیریت سفارشات  ## توضیحات  این endpoint برای مدیریت و مشاهده سفارشات فروشنده استفاده می‌شود.  </div> 
     * @summary دریافت سفارش
     * @param {string} orderUuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public orderApiV1ManagerRetrieve(orderUuid: string, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).orderApiV1ManagerRetrieve(orderUuid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * <div dir=\"rtl\" style=\"text-align: right;\">  احیای مرسوله دیجی‌اکسپرس  ## توضیحات  این endpoint برای احیای (reactivate) یک مرسوله دیجی‌اکسپرس که قبلاً لغو شده یا در وضعیت غیرفعال است استفاده می‌شود. با ارسال `preparation_time` (زمان آماده‌سازی بر حسب روز)، زمان جدید آماده بودن بار تنظیم می‌شود.  نیاز به **API_KEY** فروشنده دارد.  ## پارامترهای ورودی  * **preparation_time** (اختیاری، پیش‌فرض: ۲): تعداد روز تا آماده‌شدن بار برای تحویل به پیک  ## شرایط  * سفارش باید دارای روش ارسال **DigiExpress** باشد * مرسوله باید در وضعیت قابل احیا باشد  </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API     participant DX as دیجی‌اکسپرس      M->>API: POST /order/api/v1/manager/{order_uuid}/revive-shipment/     Note over M,API: Header: X-API-KEY<br/>{preparation_time: 2}      alt روش ارسال DigiExpress نیست         API-->>M: 400 خطا         Note over API,M: {error: \"Selected shipping method is not DigiExpress\"}     else احیا موفق         API->>DX: احیای مرسوله با زمان جدید         DX-->>API: تأیید احیا         API-->>M: 200 موفق         Note over API,M: {message, order_uuid, status, status_display}     end ``` 
     * @summary احیای ارسال سفارش
     * @param {string} orderUuid 
     * @param {ReviveShipment} [reviveShipment] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public orderApiV1ManagerReviveShipmentCreate(orderUuid: string, reviveShipment?: ReviveShipment, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).orderApiV1ManagerReviveShipmentCreate(orderUuid, reviveShipment, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * <div dir=\"rtl\" style=\"text-align: right;\">  بروزرسانی وضعیت سفارش  ## توضیحات  این endpoint به فروشنده امکان می‌دهد وضعیت یک سفارش را به‌صورت مستقیم تغییر دهد. این endpoint برای مواردی مانند علامت‌گذاری سفارش به‌عنوان «ارسال شده» یا «تحویل داده شده» توسط فروشنده استفاده می‌شود.  نیاز به **API_KEY** فروشنده دارد.  ## وضعیت‌های مجاز  * **DELIVERED**: تحویل شد * **DISPATCHED**: ارسال شد * سایر وضعیت‌های تعریف‌شده در سیستم  </div>  ```mermaid sequenceDiagram     participant M as فروشنده     participant API as BWDK API      M->>API: PUT /order/api/v1/manager/{order_uuid}/update-status/     Note over M,API: Header: X-API-KEY<br/>{status: \"DELIVERED\"}      alt وضعیت معتبر است         API-->>M: 200 موفق         Note over API,M: اطلاعات کامل سفارش با وضعیت جدید     else وضعیت نامعتبر است         API-->>M: 400 خطا         Note over API,M: {error: \"invalid status\"}     end ``` 
     * @summary به‌روزرسانی وضعیت سفارش
     * @param {string} orderUuid 
     * @param {UpdateOrderStatus} updateOrderStatus 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public orderApiV1ManagerUpdateStatusUpdate(orderUuid: string, updateOrderStatus: UpdateOrderStatus, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).orderApiV1ManagerUpdateStatusUpdate(orderUuid, updateOrderStatus, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * <div dir=\"rtl\" style=\"text-align: right;\">  تایید سفارش پس از پرداخت  ## توضیحات  پس از اتمام فرایند پرداخت توسط کاربر، مرچنت باید سفارش را تایید کند. این endpoint برای تایید و نهایی کردن سفارش پس از پرداخت موفق توسط مشتری استفاده می‌شود. در این مرحله مرچنت سفارش را تایید می‌کند و وضعیت سفارش به **VERIFIED_BY_MERCHANT** تغییر می‌یابد.  ## روند کاری  **مرحله ۲: بازگشت کاربر و دریافت نتیجه**  پس از تکمیل فرایند پرداخت (موفق یا ناموفق)، کاربر به آدرس callback_url که هنگام ساخت سفارش ارسال کرده بودید بازگردانده می‌شود. در این درخواست وضعیت سفارش به صورت query parameters ارسال می‌شود:   **Query Parameters:** * **success**: متغیر منطقی نشان‌دهنده موفق یا ناموفق بودن سفارش * **status**: وضعیت سفارش (PAID، FAILED، وغیره) * **phone_number**: شماره تلفن مشتری * **order_uuid**: شناسه یکتای سفارش * **merchant_order_id**: شناسه سفارش در سیستم مرچنت  **مرحله ۳: تایید سفارش در بک‌اند**  سپس شما باید این endpoint را فراخوانی کنید تا سفارش را تایید کنید و اطمینان حاصل کنید که سفارش موفقیت‌آمیز ثبت شده است: </div> 
     * @summary تایید سفارش
     * @param {string} orderUuid 
     * @param {VerifyOrder} verifyOrder 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public orderApiV1ManagerVerifyCreate(orderUuid: string, verifyOrder: VerifyOrder, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).orderApiV1ManagerVerifyCreate(orderUuid, verifyOrder, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * <div dir=\"rtl\" style=\"text-align: right;\">  موجودی کیف پول فروشنده  ## توضیحات  این endpoint موجودی کیف پول فروشنده را برمی‌گرداند. کیف پول برای پرداخت هزینه ارسال دیجی‌اکسپرس استفاده می‌شود. هنگام ثبت مرسوله دیجی‌اکسپرس، هزینه ارسال به‌صورت خودکار از کیف پول کسر می‌شود.  نیاز به **API_KEY** فروشنده دارد.  </div> 
     * @summary دریافت موجودی کیف پول
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public walletsApiV1WalletBalanceRetrieve(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).walletsApiV1WalletBalanceRetrieve(options).then((request) => request(this.axios, this.basePath));
    }
}

export const OrderApiV1ManagerListStatusEnum = {
    NUMBER_1: 1,
    NUMBER_10: 10,
    NUMBER_11: 11,
    NUMBER_12: 12,
    NUMBER_13: 13,
    NUMBER_14: 14,
    NUMBER_15: 15,
    NUMBER_16: 16,
    NUMBER_17: 17,
    NUMBER_18: 18,
    NUMBER_19: 19,
    NUMBER_2: 2,
    NUMBER_20: 20,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9,
} as const;
export type OrderApiV1ManagerListStatusEnum = typeof OrderApiV1ManagerListStatusEnum[keyof typeof OrderApiV1ManagerListStatusEnum];
export const OrderApiV1ManagerPaidListStatusEnum = {
    NUMBER_1: 1,
    NUMBER_10: 10,
    NUMBER_11: 11,
    NUMBER_12: 12,
    NUMBER_13: 13,
    NUMBER_14: 14,
    NUMBER_15: 15,
    NUMBER_16: 16,
    NUMBER_17: 17,
    NUMBER_18: 18,
    NUMBER_19: 19,
    NUMBER_2: 2,
    NUMBER_20: 20,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9,
} as const;
export type OrderApiV1ManagerPaidListStatusEnum = typeof OrderApiV1ManagerPaidListStatusEnum[keyof typeof OrderApiV1ManagerPaidListStatusEnum];


