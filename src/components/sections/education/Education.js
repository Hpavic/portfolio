import './Education.css';

const Education = () => {
    return (
        <section className="section education-section">
            <div className="section-title">
                <h2>My educational path</h2>
            </div>
            <div className="section-content">
                <div className="puzzle-piece">
                <div className="content">
                        <div>2013</div>
                        <div>Graduated at MIOC</div>
                        <div>XV. Gymnasium, Zagreb</div>
                    </div>
                </div>

                <div className="puzzle-piece">
                <div className="content">
                    <div>2021</div>
                    <div>Bachelor's degree in computer science</div>
                    <div>FOI, University of Zagreb</div>
                </div>
                </div>

                <div className="puzzle-piece">
                <div className="content">
                        <div>2024</div>
                        <div>mag</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;