import { toast } from 'sonner';

export function audioPlayCall(audioRef, url = '') {
  const playPromise = audioRef.current.play();
  playPromise && playPromise.catch(err => {
    const outputWithUrl = url ? `音频播放失败: ${url}` : '音频播放失败';
    console.error(outputWithUrl, err);
    toast.error(outputWithUrl);
  });
}

export function playAudio(audioRef, url = '') {
  if (!audioRef.current) {
    return;
  }
  // https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/readyState
  if (audioRef.current.readyState >= 2) {
    audioPlayCall(audioRef, url);
    return;
  }
  const handleCanPlay = () => {
    audioRef.current.removeEventListener('canplay', handleCanPlay);
    audioPlayCall(audioRef, url);
  };
  audioRef.current.addEventListener('canplay', handleCanPlay);
  audioRef.current.load();
}
