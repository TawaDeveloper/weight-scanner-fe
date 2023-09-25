import JSBarcode from 'jsbarcode';
import { useEffect, forwardRef } from 'react';
import './printer.css';

interface CodeType {
  code: string;
  title?: string;
}

interface IProps {
  codeList?: CodeType[];
}

export function BarCodePrintPage(
  props: IProps,
  ref: React.Ref<HTMLDivElement> | undefined,
) {
  const { codeList = [] } = props;

  useEffect(() => {
    codeList.forEach((code) => {
      JSBarcode(`#cart_barcode_${code.code}`, code.code);
    });
  }, [codeList]);

  return (
    <div id="printer-container" style={{}} ref={ref}>
      {codeList.map((code) => {
        return (
          <div key={code.code} className="code-box">
            <div className="page-break" />
            {code.title ? <div>{code.title}</div> : null}
            <svg id={`cart_barcode_${code.code}`} />{' '}
          </div>
        );
      })}
    </div>
  );
}

export default forwardRef(BarCodePrintPage);
