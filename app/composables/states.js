export function useCounter() {
    return useState('counterState', () => 1)
} 