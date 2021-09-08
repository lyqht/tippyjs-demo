// for the 1st section

tippy('#diamond', {
    content: 'Awesome!',
    placement: 'right-end'
});

// for the 2nd section

const [instance] = tippy('#tooltipContainer', {
    content: 'tooltip',
    sticky: true
})

const tooltipContainer = document.getElementById("tooltipContainer");
        
document.getElementById("textContainer").addEventListener("mouseup", () => {
    let selection = document.getSelection();
    if (!selection.isCollapsed) {
        const { left, top, width, height } = selection.getRangeAt(0).getBoundingClientRect()
    
        tooltipContainer.style.left = `${left}px`
        tooltipContainer.style.top = `${top}px`
        tooltipContainer.style.width = `${width}px`
        tooltipContainer.style.height = `${height}px`
  
        console.log("showing")
        const numLines = selection.toString().length;
        instance.setContent(`Great Job! You selected ${numLines} charcters!`);
        instance.enable()
    }
});

document.addEventListener('mousedown', (event) => {
    console.log("hiding")
    tooltipContainer.style.width = `${0}px`
    tooltipContainer.style.height = `${0}px`
    instance.disable()
})