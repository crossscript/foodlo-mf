import React from "react"
import "./dishBB.scss"


const BroadBar = (props) => {
    return (
        <div className="dishB-cont">
            <div className="dishB-desc">
                <div className="dishB-detail">
                    {
                        props.data.map(val => {
                            return (
                                <>
                                    <div className="dishB-name">{ val.cat }</div>
                                    {
                                        val.content.map(value => {
                                            return (
                                                <div className="dishB-indg">{ value }</div>
                                            );
                                        })
                                    }
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className="dishB-cat" style={ { backgroundColor: `${props.catg === 'v' ? '#2AC769' : '#FB4E4E'}`, borderColor: `${props.catg === 'v' ? '#DDF8F8' : '#FFEBEB'}` } }></div>
        </div>
    );
}

export default BroadBar;