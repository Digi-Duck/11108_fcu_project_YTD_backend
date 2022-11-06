@extends('layouts.app')
@section('css')
    <style>
        :root::-webkit-scrollbar {
            display: none;
        }

        main {
            width: 100%;
            height: 90vh;
            background-image: url(../backend_pic/dashboard.jfif);
            background-size: contain;
            background-attachment: fixed;
            padding-top: 50px;
            color: white;
        }

        table {
            width: 60%;
            text-align: center;
            margin: auto;
            background-color: #fff;
        }

        thead,tbody{
            background-color: #000000dd;
        }

        th,
        td {
            border: 1px solid black;
        }

        img {
            width: 150px;
            margin:auto;
        }

        .edit-btn {
            color: white;
            background-color: grey;
            display: inline-block;
            margin-block: 30px
        }
    </style>
@endsection

@section('main')
    <table style="border:1px solid black">
        <thead>
            <tr>
                <th>標題</th>
                <th>內容</th>
                <th>圖片</th>
                <th>修改</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($blog as $key => $item)
                <tr>
                    <td>{{ $item->title }}</td>
                    <td>{!! $item->content !!}</td>
                    <td><img src=".{{ $item->pic_path }}" alt=""></td>
                    <td>
                        <a href="/admin/blog/edit/{{ $item->id }}"
                            class="edit-btn font-bold py-2 px-4 border rounded">✒</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
