import styled from 'styled-components'

export const TrackWrapper = styled.div`
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  margin: 1rem;
  width: 25rem;
`

export const TrackThumb = styled.img`
  height: 6.4rem;
  width: 6.4rem;
`

export const TrackInfos = styled.div`
  margin-left: 1rem;
`

export const TrackTitle = styled.p`
  color: var(--spotify-green);
  font-size: 1.5rem;
  line-height: 20px;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const TrackMuted = styled.p`
  color: #999;
  font-size: 1.3rem;
  line-height: 22px;
`

export const Button = styled.button``
