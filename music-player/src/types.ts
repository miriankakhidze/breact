export interface SongI {
    name: string
    cover: string
    artist: string
    audio: string
    color: string[]
    id: string
    active: boolean
}

export interface SongInfo {
    currentTime: number
    duration: number
}