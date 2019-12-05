const renderFrame = (obj) => {
    return `
    <div class = "frame">
        <div class = "window">
            <h1>${obj.title}</h1>
            <img src = "${obj.img}"/>
            <p>${obj.description}</p>
            <p>Check out <a href = "${obj.other}">this link</a> to find more about this project </p>
        </div>
        <button id = "cancel"><i class="fas fa-window-close"></i></button>
    </div>`;

}
const handleFrameClose = (event) => {
    $("#cancel").parent().remove();
}
const handleFrameClick = (event) => {
    const context = $(event.target);
    const title = context.parent().children("h4").text();
    const description = context.parent().children("h6").data("p");
    const img = context.parent().children("h6").data("img");
    const other = context.parent().children("h6").data("other");
    const obj = {
        title:title,
        description:description,
        img:img,
        other:other
    }
    $("#main").append(renderFrame(obj));
}

$(function() {
    $("#main").on("click","h6",handleFrameClick)
    $("#main").on("click","#cancel",handleFrameClose)
});