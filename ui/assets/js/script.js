$(function() {
    window.addEventListener("message", function(event){
        var item = event.data
        if(item.action == "spawnui"){
            $('body').fadeIn()
            $('body').html(`
            <div class="container">
            <div class="text">
                <span>${item.msg}</span>
            </div>
            <div class="key-outring">
                <div class="key">
                    <span>E</span>
                </div>
            </div>
        </div>
        
    <style>
    :root{
    --piv: 0.09259259259259259vh;
    }

    body {
    overflow: hidden;
    }

    .container {
    position: absolute;
    transform: translate(-50%, -50%);
    width: calc(var(--piv) * 321);
    height: calc(var(--piv) * 86);
    left: 50%;
    top: 90%;
    }

    .key-outring {
    position: absolute;
    transform: translate(-50%, -50%);
    width: calc(var(--piv) * 86);
    height: calc(var(--piv) * 86);
    left: 15%;
    top: 50%;

    border: calc(var(--piv) * 2) solid var(--color-1);
    border-radius: calc(var(--piv) * 53);
    }

    .key {
    position: absolute;
    transform: translate(-50%, -50%);
    width: calc(var(--piv) * 72);
    height: calc(var(--piv) * 72);
    left: 50%;
    top: 50%;

    background: linear-gradient(39.25deg, #0D0717 14.07%, var(--color-1) 185.29%);
    box-shadow: var(--color-3);
    border-radius: 100%;
    }

    .key span {
    position: absolute;
    transform: translate(-50%, -50%);
    width: calc(var(--piv) * 72);
    height: calc(var(--piv) * 72);
    left: 50%;
    top: 50%;

    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: calc(var(--piv) * 35);
    line-height: 200%;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    }

    .text {
    position: absolute;
    transform: translate(-50%, -50%);
    width: calc(var(--piv) * 310);
    height: calc(var(--piv) * 72);
    left: 50%;
    top: 50%;

    background: var(--color-2);
    border-radius: calc(var(--piv) * 53);
    }

    .text span {
    position: absolute;
    transform: translate(-50%, -50%);
    width: calc(var(--piv) * 219);
    height: calc(var(--piv) * 72);
    left: 58%;
    top: 50%;

    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    display: flex;
    text-align: right;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    font-size: calc(var(--piv) * 12);
    line-height: 125.2%;
    color: #ffffff;
    }
    </style>
            `)
        }
        if(item.action == "break"){ $('body').fadeOut() }
    })
}) 

document.ready = function(){
    $('body').fadeOut()
}