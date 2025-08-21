import {Button, ButtonProps} from "antd";


interface NoneButtonProps extends  ButtonProps{
    text: string;
}

export const NoneButton = ({text, ...rest}: NoneButtonProps) => {
    return (
        <Button
            size="large"
            className="!text-white !border-none w-[130px] h-[20px] transition-all duration-300
             bg-[#9856ff66]! hover:bg-[#9856ff]"
            style={{
                boxShadow: "inset 0 0 8px #9856ff, 0 0 6px #9856ff66",
                borderRadius: "10px",
            }}
            {...rest}
        >
            {text}
        </Button>

    )
}