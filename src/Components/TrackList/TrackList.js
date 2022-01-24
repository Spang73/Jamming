import React from 'react'
import './TrackList.css'
import { Track } from '../Track/Track'

export function TrackList({tracks}) {
    return <div className="TrackList">
    { tracks.map(track =><Track track={track} key={track.id}/> ) }
</div>
}