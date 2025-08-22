import React from "react";
import { Button } from "antd";

const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children } = props;

  return (
      <div className="w-full h-[600px] flex">
        <div className="flex flex-col bg-[#1a1a1a] shadow-lg hover:shadow-xl transition rounded-lg px-6 py-8 flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold text-white">
              ${price}
              <span className="text-base font-medium text-gray-400">/{duration}</span>
            </h3>
            <h4 className="text-lg font-semibold text-white">{packageName}</h4>
          </div>

          {/* Subtitle */}
          <p className="text-sm text-gray-400 mb-4">{subtitle}</p>

          {/* Content */}
          <div className="flex-1">{children}</div>

          {/* Button pinned to bottom */}
          <div className="border-t border-white/10 pt-6 mt-6">
            <Button
                size="large"
                block
                className="!text-white !border-none w-[130px] h-[20px] transition-all duration-300
             bg-[#9856ff66]! hover:bg-[#9856ff]"
                style={{
                  boxShadow: "inset 0 0 8px #9856ff, 0 0 6px #9856ff66",
                  borderRadius: "10px",
                }}
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
  );
};

export default PricingBox;
