const renderFrame = (obj) => {
    return `
    <div class = "frame">
        <div class = "window">
            <h1>${obj.title}</h1>
            <img src = ${obj.img}/>
            <p>${obj.description}</p>
            <p>${obj.other}</p>
        </div>
        <button id = "cancel"><i class="fas fa-window-close"></i></button>
    </div>`;

}
const handleFrameClose = (event) => {
    $("#cancel").parent().remove();
}
const handleFrameClick = (event) => {
    const context = $(event.target);
    const title = context.children("h4").text();
    const description = context.children("p").text();
    const img = context.children("img").attr('src');;
    const other = context.children(".other").text();
    const obj = {
        title:title,
        description:description,
        img:img,
        other:other
    }
    $("#main").append(renderFrame(obj));
}

$(function() {
    $("#main").on("click",".grid-item",handleFrameClick)
    $("#main").on("click","#cancel",handleFrameClose)
});