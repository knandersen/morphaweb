export const track =(eventName) => {
    if ( window && window.umami) {
        window.umami.track(eventName)
    }
}