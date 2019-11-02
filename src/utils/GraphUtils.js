import {Parser} from 'papaparse'

export function randomColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

//TODO make exact file validation
export function processAndValidateGraphData(csvFile) {
    const parser = new Parser({});
    const {data} = parser.parse(csvFile, 0, false);

    const nodes = data[0];
    const nodesAmount = nodes.length;
    const edges = data.slice(1);

    const resultNodes = [];
    const resultEdges = [];

    for (let i = 0; i < nodesAmount; i++) {
        const item = nodes[i].trim();
        if (item) {
            resultNodes.push({id: i + 1, label: nodes[i].trim(), color: randomColor()});
        }
    }

    for (let i = 0; i < edges.length; i++) {
        if (edges[i].length > 2) {
            throw Error('Invalid file format')
        }
        const item1 = edges[i][0].trim();
        const item2 = edges[i][1].trim();
        if (item1 > nodesAmount || item2 > nodesAmount) {
            throw Error(`Connection between nodes ${item1} and ${item2} cannot be established!`)
        }
        if (item1 && item2) {
            resultEdges.push({from: item1, to: item2})
        }
    }

    return [resultNodes, resultEdges]
}