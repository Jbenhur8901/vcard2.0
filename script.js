document.addEventListener('DOMContentLoaded', (event) => {
    // Informations de contact au format vCard. Remplacez ces données par les vôtres.
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Smith;Tina;;;Ph.D
FN:Tina Smith Ph.D
ORG:Valve Inc
TITLE:Researcher
TEL;TYPE=WORK,VOICE:+12341231234
EMAIL;TYPE=PREF,INTERNET:tina@valve.research
URL:https://www.valve.research
ADR;TYPE=WORK,PREF:;;123 Research Rd;Anytown;90210;USA
END:VCARD`;

    // Génération du QR code
    const qrCodeElement = document.getElementById("qrCode");
    if (qrCodeElement) {
        new QRCode(qrCodeElement, {
            text: vCardData,
            width: 128,
            height: 128,
            colorDark: "#2c3e50",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    // Gestion du téléchargement du fichier .vcf
    const downloadButton = document.getElementById('download-btn');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            const blob = new Blob([vCardData], { type: 'text/vcard' });
            
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'tina_smith_contact.vcf'; 
            
            document.body.appendChild(a);
            a.click();
            
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }
});