import React from 'react';

import {
  Transak,
  TransakConfig
} from "@transak/transak-sdk";

import { CardBuyBtn } from '../assets/style/cardNFT.style';


enum Environments {
  STAGING = "STAGING",
  PRODUCTION = "PRODUCTION"
}


const settings: TransakConfig = {

  apiKey: 'a26e1ce0-0860-4c47-8f96-303831117804',
  environment: Environments.STAGING,
  defaultCryptoCurrency: 'ETH',
  themeColor: '000000',
  widgetHeight: "100%",
  widgetWidth: "100%",

};

export function openTransak() {

  const transak = new Transak(settings);

  transak.init();


  if ('on' in transak) {

    (transak as any).on((transak as any).ALL_EVENTS, (data: any) => { console.log(data); });

    (transak as any).on((transak as any).EVENTS.TRANSAK_WIDGET_CLOSE, (eventData: any) => { transak.close(); });

    (transak as any).on((transak as any).EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData: any) => { transak.close(); });

  } else console.error("Метод on не найден в объекте Transak");

}

export const TransakConnect: React.FC = () => {

  return (

    <>

      <CardBuyBtn onClick={() => openTransak()}>

        Fiat

      </CardBuyBtn >

    </>

  );

}
