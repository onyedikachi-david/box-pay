import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return <h1></h1>;
};

export default Pricing;

// web 3 libraries
import { useNetwork, useAccount, useSigner } from "wagmi";

// helpers
import debounce from "lodash.debounce";
// Ui Libraries
import { NumericFormat } from "react-number-format";

const CodeInput = ({ setCode }) => {
  const { isDisconnected } = useAccount();

  return (
    <span className={`self-center m-4 flex`}>
      <span
        className={`self-center font-bold text-xs text-[#20cc9e] dark:text-[#149adc]`}
      >
        Enter 4 digit Code:
      </span>
      <NumericFormat
        disabled={isDisconnected}
        className={`focus:outline-none font-extralight text-xs rounded ml-2 `}
        allowNegative={false}
        // value={code}
        onValueChange={debounce((values) => {
          if (values.floatValue != 0 && values.floatValue) {
            // only if VALUE IS NOT 0 AND !undefined
            // Sets Receiving Amount and Fee and calculates usdValue
            setCode(values.value);
          }
        }, 500)}
      />
    </span>
  );
};

// export default CodeInput
