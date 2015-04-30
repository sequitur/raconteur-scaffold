# 2015-04-30

- Removed exportUndum() from scaffold. That functionality has been deprecated in Raconteur itself, and making sure there is only one Undum object is now the responsibility of the build system. The Gulpfile in this scaffold now corrects for this, so problem solved.