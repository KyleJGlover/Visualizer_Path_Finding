import {useState, useEffect} from 'react';
import Node from './Nodes/NodePoint';
import Header from './Header/Header'

function PathFinderVisualizer() {
//creates the grid of squares
    const [nodes, setNodes] = useState([]);

    function createTable(){
        let nodes = [];


        for (let row = 0; row < 15; row++){
            let currentRow = [];
            for (let col = 0; col < 50; col++){
                currentRow.push([]);
            }
            nodes.push(currentRow);
        }
        console.log(nodes)
        setNodes(nodes);
    }



    useEffect(() => {
        createTable()
    }, []);
    

    return (
        
        <div className="Container">
            <header><Header/></header>
            <div className ="Grid">
                {nodes.map((row, rowIdx) => {
                    return (
                            row.map((node, nodeIdx) => <Node/>)
                        )
                })}
            </div>
        </div>
    )
}

export default PathFinderVisualizer
