# Binary Files to Upload Manually

The following binary files need to be uploaded manually to the GitHub repository as they cannot be pushed through the API:

## Video Files
- `coffeeback.mp4` - Hero section background video
- `storyr.mp4` - About section story video  
- `eventr.mp4` - Events section video

## Image Files
- `im.jpg` - Carousel image 1
- `im2.jpg` through `im20.jpg` - Carousel images 2-20
- `assets/images/about-baker.jpg` - About section image

## How to Upload Binary Files

### Method 1: GitHub Web Interface
1. Go to your repository: https://github.com/Kawakoji/resilience-cafe
2. Click "Add file" → "Upload files"
3. Drag and drop the binary files
4. Commit the changes

### Method 2: Git Command Line
```bash
git add coffeeback.mp4 storyr.mp4 eventr.mp4
git add im*.jpg
git add assets/images/about-baker.jpg
git commit -m "Add binary files: videos and images"
git push origin main
```

### Method 3: GitHub Desktop
1. Open GitHub Desktop
2. Add the binary files to your repository
3. Commit and push the changes

## File Sizes
- Video files are typically large (several MB each)
- Image files should be optimized for web use
- Consider compressing videos for faster loading

## Important Notes
- These files are essential for the website to function properly
- The carousel will not work without the im*.jpg files
- The hero section will fall back to a static image without coffeeback.mp4
- The about and events sections will show placeholders without their respective videos
