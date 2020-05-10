import React from 'react';
import Glasses from '../../asserts/images/glasses.png';
import Nodes from '../../asserts/images/nodes.png';
import Imac from '../../asserts/images/imac.png';
export default () => {
    return (
        <>
            <div className="container-fluid clr-bg-ice pd-top-85 pd-bot-75">
                <div className="container">
                    <h2 className="clr-ocean fnt-fmly fnt-wt fnt-40 pd-bot-10">OUR APPROCH</h2>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 Rem <br /> possimus distinctio ex.
  Natus totam voluptatibus animi aspernatur <br /> ducimus quas
   obcaecati mollitia quibusdam temporibus
 culpa <br />dolore molestias blanditiis consequuntur sunt nisi.</p>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column card mr-2">
                            <div>
                                <img className="icon pd-bot-10" src={Glasses} alt="Not Found" />
                                <h5 className="clr-ocean fnt-fmly pd-bot-10">DATA GATHERING</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex.
                                    Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam
                                    temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
                            </p>
                            </div>
                        </div>

                        <div className="d-flex flex-column card mr-2">
                            <div>
                                <img className="icon pd-bot-10" src={Nodes} alt="Not Found" />
                                <h5 className="clr-ocean fnt-fmly pd-bot-10">DATA GATHERING</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex.
                                    Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam
                                    temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
                            </p>
                            </div>
                        </div>
                        <div className="d-flex flex-column card">
                            <div>
                                <img className="icon pd-bot-10" src={Imac} alt="Not Found" />
                                <h5 className="clr-ocean fnt-fmly pd-bot-10">DATA GATHERING</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex.
                                    Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam
                                    temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}