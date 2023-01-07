import React, { useCallback, useRef } from "react";
import Avatar from "avataaars";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Sheet from "@mui/joy/Sheet";
import DownloadIcon from "@mui/icons-material/Download";

function downloadBlob(blob: any, filename: any) {
  const objectUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
}

const AvatarComp = (props: any) => {
  console.log(
    "🚀 ~ file: AvatarComp.tsx ~ line 13 ~ AvatarComp ~ props",
    props
  );

  const svgRef = useRef<any>(null);

  const downloadSVG = useCallback(() => {
    const svg = svgRef.current.innerHTML;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    downloadBlob(blob, `myimage.svg`);
  }, []);

  return (
    <div style={{ display: "inline-flex" }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          py: 2,
          m: 2,
          borderRadius: "xs",
        }}
      >
        <Box
          sx={{
            alignSelf: "center",
            maxWidth: "100%",
            minWidth: { xs: 220, sm: 360 },
            mx: "auto",
            boxShadow: "sm",
            borderRadius: "md",
            overflow: "auto",
            background: "rgba(255,255,255,0.1)",
          }}
        >
          <Sheet sx={{ p: 2, background: "rgba(255,255,255,0.1)" }}>
            <Sheet
              variant="outlined"
              sx={{
                borderRadius: "md",
                overflow: "auto",
                borderColor: "background.level2",
                bgcolor: "background.level1",
                background: "rgba(255,255,255,0.1)",
              }}
            >
              <AspectRatio objectFit="contain" ratio="4/3" variant="plain">
                <Box sx={{ flexDirection: "column" }}>
                  <div ref={svgRef}>
                    <Avatar {...props} />
                  </div>
                  <IconButton
                    onClick={downloadSVG}
                    variant="outlined"
                    sx={{ mb: 1, borderColor:"#fff","&:hover": { borderColor: "#fff" }   }}
                  >
                    {" "}
                    <DownloadIcon
                      sx={{ fontSize: 25, color: "#fff","&:hover": { color: "#000" }  }}
                    ></DownloadIcon>
                  </IconButton>
                </Box>
              </AspectRatio>
            </Sheet>
          </Sheet>
        </Box>
      </Box>
    </div>
  );
};

export default AvatarComp;
