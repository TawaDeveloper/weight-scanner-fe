import { Button, ButtonProps } from "antd";
import './index.less'

export function CommonButton(props: ButtonProps) {
    return <Button className="button" {...props}></Button>
}