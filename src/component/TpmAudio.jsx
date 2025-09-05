import { toast } from 'sonner';

function handleAudioLoadError(audioUrl) {
  console.error(`音频加载失败: ${audioUrl}`);
  toast.error(`音频加载失败: ${audioUrl}`);
}

export default function TpmAudio({
  src,
  ...rest
}) {
  return (
    <audio
      onError={() => handleAudioLoadError(src)}
      preload="auto"
      {...rest}
    >
      <source src={src} type="audio/mpeg" />
      您的浏览器不支持音频播放
    </audio>
  );
}
