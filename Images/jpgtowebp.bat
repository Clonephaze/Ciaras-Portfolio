@echo off
for %%f in (*.JPG) do cwebp -q 90 -alpha_q 90 "%%f" -o "%%~nf.webp"
