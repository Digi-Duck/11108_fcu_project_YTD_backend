@extends('layouts.app')
@section('css')
<style>
    table {
        width: 80%;
        text-align: center;
        margin-left: 50%;
        transform: translate(-50%, 0);
    }

    th,
    td {
        border: 1px solid black;
    }

    img{
        width: 200px;
    }

    .create-btn {
        color: white;
        background-color: green;
        display: inline-block;
        margin-block: 30px
    }

    .edit-btn {
        color: white;
        background-color: skyblue;
        display: inline-block;
        margin-block: 30px
    }

    .delete-btn {
        color: white;
        background-color: crimson;
        display: inline-block;
        margin-block: 30px
    }
</style>
@endsection

@section('main')
    <table style="border:3px solid black">
        <thead>
            <tr>
                <th>編號</th>
                <th>姓名</th>
                <th>電話</th>
                <th>信箱</th>
                <th>意見</th>
                <th>刪改</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($reservation as $key =>$item)
                <tr>
                    <td>{{ $key+1 }}</td>
                    <td>{{ $item->name }}</td>
                    <td>{{ $item->phone }}</td>
                    <td>{{ $item->email }}</td>
                    <td>{{ $item->message }}</td>
                    <td>
                        <a href="/admin/reservation/edit/{{ $item->id }}"
                            class="edit-btn font-bold py-2 px-4 border rounded">編輯</a>
                        <a href="/admin/reservation/delete/{{ $item->id }}"
                            class="delete-btn font-bold py-2 px-4 border rounded">刪除</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
