export function formatGoogleDriveUrl(url: string): string {
  if (!url || typeof url !== 'string') return '';

  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'drive.google.com' && urlObj.pathname === '/uc') {
      urlObj.searchParams.set('export', 'view');
      return urlObj.toString();
    }
    return url;
  } catch (error) {
    console.warn('Invalid Google Drive URL:', url);
    return url;
  }
}
