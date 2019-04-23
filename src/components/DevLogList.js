import React, { Component } from 'react';
import StackGrid from "react-stack-grid";

class DevLogList extends Component {
    render() {
        return (
            <div className="devlog-list">
                <StackGrid columnWidth={305}>
                    <div className="devlog-card">Box</div>
                    <div className="devlog-card" style={{ height: "300px" }}>Box</div>
                    <div className="devlog-card" style={{ height: "250px" }}>Box</div>
                    <div className="devlog-card" style={{ height: "350px" }}>Box</div>
                    <div className="devlog-card" style={{ height: "250px" }}>Box</div>
                    <div className="devlog-card" style={{ height: "150px" }}>Box</div>
                    <div className="devlog-card" >Box</div>
                    <div className="devlog-card">Box</div>
                    <div className="devlog-card">Box</div>
                    <div className="devlog-card">Box</div>
                    <div className="devlog-card">Box</div>
                    <div className="devlog-card">Box</div>
                </StackGrid>
            </div>
        )
    }
}

export default DevLogList;
