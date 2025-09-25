document.addEventListener('DOMContentLoaded', (event) => {
    // Informations de contact au format vCard.
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:MATONDO;Jean Claude;;;
FN:Jean Claude MATONDO
ORG:HUB GROUP LTD
TITLE:Gérant HUB DISTRIBUTION / CEO OF HUB GROUP LTD
TEL;TYPE=WORK,VOICE:+242053501348
TEL;TYPE=CELL,VOICE:+33623220333
EMAIL;TYPE=PREF,INTERNET:jeanclaude.matondo@hub-distribution.com
URL:https://www.hub-group.ae
ADR;TYPE=WORK,PREF:;;Blvd Denis Sassou & O27 OCH la glacière;Brazzaville;;;République du Congo
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
            a.download = 'jean_claude_matondo_contact.vcf'; 
            
            document.body.appendChild(a);
            a.click();
            
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }
});