import React from "react";

const PageCatalog: React.FC = () => (
    <div className="row">
        <div className="col s12 m6">
            <div className="card">
                <div className="card-image">
                <img src="images/sample-1.jpg" />
                <span className="card-title">Название товара</span>
                <span className="card-price">Цена товара</span>
                <input className="text" />
                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                <p>ОПИСАНИЕ ТОВАРА</p>
                </div>
            </div>
        </div>
    </div>
)

export default PageCatalog;