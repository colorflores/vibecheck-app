export interface VibecheckInterfaceProps {
  navigation,
}

export interface VibecheckInterfaceState {
  query: string,
  results,
  signal: Function,
  activeSong: number | null,
}