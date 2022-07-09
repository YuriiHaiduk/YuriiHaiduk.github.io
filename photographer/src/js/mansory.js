
class Masonry {
    constructor(element,options={}) {
        this.containerNode = element;
        this.childrenNodes = element.children;
        this.childrenData = Array.from(this.childrenNodes).map((childNode)=>({
            childNode,
            origHeight:Number(childNode.dataset.height),
            origWidth:Number(childNode.dataset.width)
        }))

        this.settings = {
            gap:options.gap || 0,
            columns:options.columns || 3
        }

        this.setParameters();

        let timerId;
       window.addEventListener('resize',()=>{
           clearTimeout(timerId);
           timerId = setTimeout(()=>{
               console.log('fasfas')
               this.setParameters()
           },150)
       })

    }
    setParameters(){
        const containerWidth = window.innerWidth;
        const widthImage = (containerWidth - this.settings.gap * (this.settings.columns - 1)) / this.settings.columns;
        this.childrenData = this.childrenData.map((child) => ({
            ...child,
            currentWidth:widthImage,
            currentHeight:Math.floor(widthImage * child.origHeight / child.origWidth)
        }))

        const heightColumns = new Array(this.settings.columns).fill(0)
        const sizeColumns = new Array(this.settings.columns).fill(0)

        this.childrenData.forEach((child,i)=>{
            heightColumns[i % this.settings.columns] += child.currentHeight + this.settings.gap;
            sizeColumns[i % this.settings.columns] += 1;
        })

        const minHeightColumn =  heightColumns.reduce((acc,size)=>{
            return (size < acc ? size : acc)
        })

        const diffImages = heightColumns.map( (heightColumn,i)=>{
            return (heightColumn - minHeightColumn)/sizeColumns[i]
        })

        this.containerNode.style.width = `${containerWidth}px`;
        this.containerNode.style.height = `${minHeightColumn - this.settings.gap}px`;

        const topSets = new Array(this.settings.columns).fill(0);

        this.childrenData = this.childrenData.map((child,i)=>{
            const indexColumn = i % this.settings.columns;
            const left = indexColumn * widthImage + this.settings.gap * indexColumn;
            const currentHeight = child.currentHeight - diffImages[indexColumn];
            const top = topSets[indexColumn];
            topSets[indexColumn] += currentHeight + this.settings.gap;

            return {
                ...child,
                currentHeight,
                left,
                top
            }
        });

        this.childrenData.forEach((child)=>{
            child.childNode.style.top = `${child.top}px`;
            child.childNode.style.left = `${child.left}px`;
            child.childNode.style.width = `${child.currentWidth}px`;
            child.childNode.style.height = `${child.currentHeight}px`;
        });
    }
}

new Masonry(document.getElementById('masonry'),{
    gap:7,
    columns:3,
})
