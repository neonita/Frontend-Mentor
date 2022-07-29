import Buttons from "./Buttons";

const CTA = () => {
  return (
    <section className="cta padding--x padding--y">
      <header className="cta__text">
        <h2 className="h h-2">Clipboard for iOS and Mac OS</h2>
        <p className="txt txt-2">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
      </header>
      <div className="cta__btns">
        <Buttons />
      </div>
    </section>
  );
};

export default CTA;
