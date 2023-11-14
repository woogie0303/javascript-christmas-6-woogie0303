const CHRISTMAS_EVENT = {
  start: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  visitDateInputPrint: "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
  orderMenuInputPrint: "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n",
  friday: 5,
  saturday: 6,
  sunday: 0,
  thursday: 4,
  d_dayDiscountStart: 1,
  d_dayDiscountEnd: 25,
  christmasDay: 25,
  orderMenuTitle: "<주문 메뉴>",
  beforeDiscountPriceTitle: "\n<할인 전 총주문 금액>",
  giftMenuTitle: "\n<증정 메뉴>",
  benefitTitle: "\n<혜택 내역>",
  totalBenefitPriceTitle: "\n<총혜택 금액>",
  afterDiscountTotalPriceTitle: "\n<할인 후 예상 결제 금액>",
  eventBadgeTitle: "\n<12월 이벤트 배지>",
  printChampagneMenu: "샴페인 1개",
  printNothing: "없음",
  start: 1,
  end: 31,
  maximumOrderCount: 20,
  minimumOrderCount: 1,
};

const EVENT_PRICE = {
  minimumOrderPrice: 10000,
  badgeSantaPrice: 20000,
  badgeTreePrice: 10000,
  badgeStarPrice: 5000,
  giftMinimumPrice: 120000,
  chrismasDayStartPrice: 1000,
  specialEventPrice: 1000,
  champagnePrice: 25000,
  dayDiscountPrice: 2023,
};

export { CHRISTMAS_EVENT, EVENT_PRICE };
