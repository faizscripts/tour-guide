function SpotlightAccordion({id, title, children}) {

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="true" aria-controls={id}>
                    {title}
                </button>
            </h2>
            <div id={id} className="accordion-collapse collapse" aria-labelledby="headingOne"
                 data-bs-parent="#spotlightAccordion">
                <div className="accordion-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SpotlightAccordion