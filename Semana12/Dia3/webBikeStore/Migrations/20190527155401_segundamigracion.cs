using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace webBikeStore.Migrations
{
    public partial class segundamigracion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "picture",
                table: "AspNetUsers",
                nullable: true);

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "picture",
                table: "AspNetUsers");
        }
    }
}
