document.addEventListener("DOMContentLoaded", async () => {

    const SUPABASE_URL = "https://vkoctehputinmgbjmmmr.supabase.co";
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrb2N0ZWhwdXRpbm1nYmptbW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU2NDU3ODgsImV4cCI6MjEwMTIyMTc4OH0.TnjnWf4QutSOrD1dwrUUXIBtKmUCPsRPaikxswdyMtU";
    const supabase = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );

    const form = document.getElementById("guestbookForm");
    const nameInput = document.getElementById("guestNameInput");
    const messageInput = document.getElementById("guestMessage");
    const button = document.getElementById("submitGuestbook");
    const counter = document.getElementById("charCount");
    const list = document.getElementById("guestbookMessages");

    async function loadMessages() {

        const { data, error } = await supabase
            .from("guestbook")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error(error);
            return;
        }

        if (!data.length) {

            list.innerHTML = `
                <div class="empty-message">
                    ❦
                    <p>Jadilah yang pertama meninggalkan titipan doa.</p>
                </div>
            `;
            return;
        }

        list.innerHTML = "";

        data.forEach(item => {

    const firstLetter = item.name.charAt(0).toUpperCase();

    const date = new Date(item.created_at);

    const formattedDate = date.toLocaleDateString("ms-MY",{
        day:"numeric",
        month:"long",
        year:"numeric"
    });

    const formattedTime = date.toLocaleTimeString("ms-MY",{
        hour:"numeric",
        minute:"2-digit"
    });

    list.innerHTML += `

        <div class="guest-card fade-up">

            <div class="guest-avatar">

                ${firstLetter}

            </div>

            <div class="guest-content">

                <h4>${item.name}</h4>

                <blockquote>

                    "${item.message}"

                </blockquote>

                <small>

                    ${formattedDate}
                    •
                    ${formattedTime}

                </small>

            </div>

        </div>

    `;

});

    }

    await loadMessages();

    messageInput.addEventListener("input", () => {

        counter.textContent = messageInput.value.length;

    });

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        button.disabled = true;
        button.innerHTML = "Menghantar...";

        const { error } = await supabase
            .from("guestbook")
            .insert({

                name: nameInput.value.trim(),
                message: messageInput.value.trim()

            });

        if (error) {

            console.error(error);

            button.innerHTML = "Ralat";

        } else {

            button.innerHTML = "✓ Berjaya Dihantar";

            form.reset();

            counter.textContent = "0";

            await loadMessages();

        }

        setTimeout(() => {

            button.disabled = false;

            button.innerHTML = "Kirim Titipan";

        },2000);

    });

});