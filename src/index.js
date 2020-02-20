
// You should implement your task here.
module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return []
    }
    let result = matrix.reduce((acum, el, index) => {
        if (index % 2 == 0) {
            return [...acum, ...el]
        } else {
            return [...acum, ...el.reverse()]
        }
    }, [])
    return result
}
