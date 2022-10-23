const Section = ({ children, extraContent }) => (
    <section className="currency-exchange">
        <div className="currency-exchange__box">
            {children}
        </div>
        {extraContent}
    </section>
);

export default Section;
