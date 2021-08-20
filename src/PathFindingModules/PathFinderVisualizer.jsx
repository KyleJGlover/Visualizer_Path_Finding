import {useState, useEffect} from 'react';
import Node from './Nodes/NodePoint';

function PathFinderVisualizer() {

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
        <div className="PathFindingVisualizer">
            {nodes.map((row, rowIdx) => {
                return <div>
                    {
                        row.map((node, nodeIdx) => <Node/>)
                    }
                    </div>
            })}
        </div>
    )
}

export default PathFinderVisualizer
