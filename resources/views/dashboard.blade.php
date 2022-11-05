<style>
    .wrap{
        display: flex;
    }

    .time_report {
        font-size: 20px;
        font-weight: bold;
        line-height: 50px;
        background: #FFF;
        height: 100px;
        width: 50vw;
        border-radius: 15px;
        padding-top: 10px;
    }
</style>

<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('後台首頁') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="wrap p-6 bg-white border-b border-gray-200" style="height: 50vh">
                    <div class="time_report"></div>
                    <div class="clock">
                        <div class="hour_hand"></div>
                        <div class="minute_hand"></div>
                        <div class="second_hand"></div>
                        <div class="dot"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>

<script>
    let timeReport = document.querySelector('.time_report')
    let hourHand = document.querySelector('.hour_hand')
    let minuteHand = document.querySelector('.minute_hand')
    let secondHand = document.querySelector('.second_hand')
    let week = ['日','一', '二', '三', '四', '五', '六']

    function times() {
        let time = new Date()
        let year = time.getFullYear()
        let month = time.getMonth()
        let date = time.getDate()
        let day = time.getDay()
        let hour = time.getHours()
        let minutes = time.getMinutes()
        let seconds = time.getSeconds()

        timeReport.innerHTML =
            `今天是 ${year}年${month + 1 }月${date}日 星期${week[day]} </br>現在時間${hour}點${minutes}分${seconds}秒`

    }

    setInterval(times, 1000)
</script>
