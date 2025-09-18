# Video Troubleshooting Guide for Netlify

## 🎥 **Common Video Issues on Netlify**

### **1. File Size Limits**
- **Netlify Free:** 100MB per file limit
- **Netlify Pro:** 500MB per file limit
- **Solution:** Compress your videos

### **2. MIME Type Issues**
- **Problem:** Netlify might not serve MP4 with correct MIME type
- **Solution:** Use `netlify.toml` configuration (already added)

### **3. Autoplay Restrictions**
- **Problem:** Browsers block autoplay on many sites
- **Solution:** Videos are muted and have fallbacks

## 🔧 **Quick Fixes**

### **Check Video File Sizes:**
```bash
# Check file sizes
ls -la *.mp4
```

### **Compress Videos (if needed):**
```bash
# Using FFmpeg to compress videos
ffmpeg -i coffeeback.mp4 -vcodec h264 -acodec mp2 -crf 28 coffeeback_compressed.mp4
ffmpeg -i storyr.mp4 -vcodec h264 -acodec mp2 -crf 28 storyr_compressed.mp4
ffmpeg -i eventr.mp4 -vcodec h264 -acodec mp2 -crf 28 eventr_compressed.mp4
```

### **Create WebM Versions (for better compatibility):**
```bash
# Convert to WebM format
ffmpeg -i coffeeback.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus coffeeback.webm
ffmpeg -i storyr.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus storyr.webm
ffmpeg -i eventr.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus eventr.webm
```

## 🚀 **Deployment Steps**

### **1. Update Files:**
- Add `netlify.toml` to your repository
- Update `index.html` with improved video tags
- Compress videos if they're too large

### **2. Commit and Push:**
```bash
git add .
git commit -m "Fix video display issues on Netlify"
git push origin main
```

### **3. Redeploy on Netlify:**
- Netlify will automatically redeploy when you push
- Check the deploy logs for any errors

## 🔍 **Debugging Steps**

### **1. Check Browser Console:**
- Open Developer Tools (F12)
- Look for video-related errors
- Check Network tab for failed video requests

### **2. Test Video URLs Directly:**
- Try accessing: `https://your-site.netlify.app/coffeeback.mp4`
- If it doesn't load, the file wasn't uploaded properly

### **3. Check Netlify Deploy Logs:**
- Go to Netlify Dashboard → Deploys
- Check for any build errors or warnings

## 📱 **Mobile Considerations**

### **Data Saving Mode:**
- Videos won't autoplay on mobile if data saving is enabled
- The JavaScript handles this automatically

### **iOS Safari:**
- Requires `playsinline` attribute (already added)
- May need user interaction to play videos

## 🎯 **Alternative Solutions**

### **If Videos Still Don't Work:**

1. **Use Video Hosting Services:**
   - Upload to YouTube/Vimeo
   - Embed using iframe
   - More reliable but less control

2. **Use CDN:**
   - Upload videos to Cloudinary or similar
   - Better performance and reliability

3. **Convert to GIF:**
   - For short videos, convert to animated GIF
   - Smaller file size, better compatibility

## 📊 **Performance Tips**

### **Video Optimization:**
- Use H.264 codec for MP4
- Keep resolution reasonable (1080p max)
- Use appropriate bitrate (1-2 Mbps for web)
- Consider using poster images

### **Loading Strategy:**
- Use `preload="metadata"` (already added)
- Lazy load videos when they come into view
- Provide fallback images

## 🆘 **Still Having Issues?**

1. **Check Netlify Support:** https://docs.netlify.com/
2. **Test Locally:** Make sure videos work on your local server
3. **Try Different Browser:** Test in Chrome, Firefox, Safari
4. **Check File Permissions:** Ensure files are publicly accessible

---

**Remember:** Video files are large and can slow down your site. Always optimize them for web use!
