declare module 'react-simple-typewriter' {
  export const Typewriter: React.FC<{
    words: string[];
    loop?: boolean;
    cursor?: boolean;
    cursorStyle?: string;
    typeSpeed?: number;
    deleteSpeed?: number;
    delaySpeed?: number;
  }>;
}
